import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdminInput {
  @Field(() => String, { description: 'Username' })
  username: string;
  @Field(() => String, { description: 'Password' })
  password: string;
  @Field(() => String, { description: 'E-mail' })
  email: string;
  @Field(() => String, { description: 'Telephone' })
  phone: string;
}
