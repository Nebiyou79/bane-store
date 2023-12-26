import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CatagoryModuleBase } from "./base/catagory.module.base";
import { CatagoryService } from "./catagory.service";
import { CatagoryController } from "./catagory.controller";
import { CatagoryResolver } from "./catagory.resolver";

@Module({
  imports: [CatagoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [CatagoryController],
  providers: [CatagoryService, CatagoryResolver],
  exports: [CatagoryService],
})
export class CatagoryModule {}
