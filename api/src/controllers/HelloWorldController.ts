import {Controller, Get, PathParams} from "@tsed/common";

@Controller("/tzebra")
export class HelloWorldController {
  @Get("/:input")
  get(@PathParams("input") input: string) {
    return veryComplexAlgorythm(input);
  }
}


function veryComplexAlgorythm(input: string) {
  const res = [...input]
    .map((c, i) => i % 2 > 0 ? c.toUpperCase() : c.toLowerCase())
    .join('') + ' 🦓';
  return res;
}
