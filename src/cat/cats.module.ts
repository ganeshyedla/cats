import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://admintest:ganeshreddy@ganeshdoc.cluster-cmuse1axpsos.us-east-1.docdb.amazonaws.com:27017/ganesh?tls=true&tlsCAFile=/home/ec2-user/environment/rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`)],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
