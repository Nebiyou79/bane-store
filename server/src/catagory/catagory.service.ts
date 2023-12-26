import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CatagoryServiceBase } from "./base/catagory.service.base";

@Injectable()
export class CatagoryService extends CatagoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
