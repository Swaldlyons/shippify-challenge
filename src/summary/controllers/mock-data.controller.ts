import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { FormDataRequest } from "nestjs-form-data";
import { PayloadTestDto } from "../dto/payload-test.dto";
import { SummaryService } from "../services/summary.service";
import { TypeService } from "../services/type.service";
import { SucursalService } from "../services/sucursal.service";
import { LastEventService } from "../services/last-event.service";
import { SummaryInterface } from "../../interfaces/SummaryInterface";
import { LastEventInterface } from "../../interfaces/LastEventInterface";
import { Sucursal } from "../entities/sucursal.entity";
import { Type } from "../entities/type.entity";
import { LastEvent } from "../entities/last-event.entity";
import { Summary } from "../entities/summary.entity";

@Controller("mockdata")
export class MockDataController {
  constructor(
    private summaryService: SummaryService,
    private typeService: TypeService,
    private sucursalService: SucursalService,
    private lastEventService: LastEventService
  ) {}

  @Post("load")
  @FormDataRequest()
  async create(@Body() payload: PayloadTestDto) {
    const data: SummaryInterface[] = Object.values(
      <SummaryInterface>JSON.parse(payload.file.buffer.toString())
    ).flat();
    await this.deleteMockData();
    return this.insertMockData(data).then((result) => result);
  }

  private unique<T>(arr, props = []): T[] {
    return <T[]>[
      ...new Map(
        arr.map((entry) => [props.map((k) => entry[k]).join("|"), entry])
      ).values(),
    ];
  }

  private async deleteMockData(): Promise<void> {
    await this.summaryService.deleteAll();
    await this.lastEventService.deleteAll();
    await Promise.all([
      this.typeService.deleteAll(),
      this.sucursalService.deleteAll(),
    ]).catch((e) => {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    });
  }

  private async insertMockData(data: SummaryInterface[]) {
    const lastEventUnique: LastEventInterface[] = this.unique(
      data.map((item: SummaryInterface) => item.lastEvent),
      ["type", "sucursal"]
    );
    await this.insertMockTypeAndSucursal(lastEventUnique);
    await this.insertMockLastEvent(lastEventUnique);
    const summaries: Summary[] = await Promise.all(
      data.map(async (item: SummaryInterface): Promise<Summary> => {
        const { lastEvent } = item;
        const { type, sucursal }: LastEvent =
          await this.findIdsMockTypeAndSucursal([
            lastEvent.type,
            lastEvent.sucursal,
          ]);
        const { id } = await this.findIdMockLastEvent([type, sucursal]);
        return <Summary>{ ...item, lastEvent: id };
      })
    )
      .then((results: Summary[]) => results)
      .catch((e) => {
        throw new HttpException(e, HttpStatus.BAD_REQUEST);
      });
    await this.summaryService.insert(summaries);
    return data;
  }

  private async insertMockTypeAndSucursal(
    lastEventUnique: LastEventInterface[]
  ): Promise<void> {
    const sucursalUnique: Sucursal[] = [
      ...new Map(
        lastEventUnique.map((item: LastEventInterface) => [item.sucursal, item])
      ).values(),
    ].map((item: LastEventInterface) => <Sucursal>{ sucursal: item.sucursal });
    const typeUnique: Type[] = [
      ...new Map(
        lastEventUnique.map((item: LastEventInterface) => [item.type, item])
      ).values(),
    ].map((item: LastEventInterface) => <Type>{ type: item.type });

    await Promise.all([
      this.sucursalService.insert(sucursalUnique),
      this.typeService.insert(typeUnique),
    ]).catch((e) => {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    });
  }

  private async insertMockLastEvent(
    lastEventUnique: LastEventInterface[]
  ): Promise<LastEvent | LastEvent[]> {
    const lastEventResult: LastEvent[] = await Promise.all(
      lastEventUnique.map(
        async (item: LastEventInterface) =>
          await this.findIdsMockTypeAndSucursal([item.type, item.sucursal])
      )
    )
      .then((results: LastEvent[]) => results)
      .catch((e) => {
        throw new HttpException(e, HttpStatus.BAD_REQUEST);
      });
    return await this.lastEventService.insert(lastEventResult);
  }

  private async findIdsMockTypeAndSucursal([
    type,
    sucursal,
  ]: string[]): Promise<LastEvent> {
    return await Promise.all([
      this.typeService.findByType(type),
      this.sucursalService.findBySucursal(sucursal),
    ])
      .then(
        ([type, sucursal]) =>
          <LastEvent>{
            type: type.id,
            sucursal: sucursal.id,
          }
      )
      .catch((e) => {
        throw new HttpException(e, HttpStatus.BAD_REQUEST);
      });
  }

  private async findIdMockLastEvent([
    type,
    sucursal,
  ]: number[]): Promise<LastEvent> {
    return await this.lastEventService.findByTypeAndSucursal([type, sucursal]);
  }
}
