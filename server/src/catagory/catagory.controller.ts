import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CatagoryService } from "./catagory.service";
import { CatagoryControllerBase } from "./base/catagory.controller.base";

@swagger.ApiTags("catagories")
@common.Controller("catagories")
export class CatagoryController extends CatagoryControllerBase {
  constructor(
    protected readonly service: CatagoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
