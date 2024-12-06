# Feature Can use 

* <b>Route wildcards</b>
```
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
```

* <b>Status code | Header | Redirect | Params</b>
```
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}

@Post()
@Header('Cache-Control', 'no-store')
create() {
  return 'This action adds a new cat';
}

@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version) {
  if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}

@Get(':id')
findOne(@Param('id') id: string): string {
  return `This action returns a #${id} cat`;
}
```

* <b>Sub-Domain Routing</b>
```
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
```

* <b>Built-in pipes</b>
```
ValidationPipe
ParseIntPipe
ParseFloatPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
ParseEnumPipe
DefaultValuePipe
ParseFilePipe
```

* <b>Interceptors</b>
```
1. bind extra logic before / after method execution
2. transform the result returned from a function
3. transform the exception thrown from a function
4. extend the basic function behavior
5. completely override a function depending on specific conditions
```

* <b>Custom route decorators</b>
