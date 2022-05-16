import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { environments } from "./enviroments";
import { SummaryModule } from "./summary/summary.module";
import { TypesModule } from "./types/types.module";
import config from "./config";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.ENVIRONMENT],
      load: [config],
      isGlobal: true,
    }),
    SummaryModule,
    TypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
