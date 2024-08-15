import { Controller, Post, Req } from "@nestjs/common";

@Controller("/students")
export class StudentController {
  /* nestjs replaces this function */
  @Post()
  createStudent(/* use this annotation
  to access req parameter */@Req() req: Request) {
    return "<h1>Hello Student : ${req.url}</h1>";
  }
}
