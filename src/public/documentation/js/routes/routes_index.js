var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./login/login.module#LoginModule","children":[{"kind":"module","children":[{"name":"loginRoute","filename":"src/app/login/login.module.ts","module":"LoginModule","children":[{"path":"","component":"LoginComponent"}],"kind":"module"}],"module":"LoginModule"}]},{"path":"preview","loadChildren":"./preview/preview.module#PreviewModule","children":[{"kind":"module","children":[{"name":"previewRoute","filename":"src/app/preview/preview.module.ts","module":"PreviewModule","children":[{"path":"","component":"PreviewComponent"}],"kind":"module"}],"module":"PreviewModule"}]},{"path":"home","loadChildren":"./home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"homeRoute","filename":"src/app/home/home.module.ts","module":"HomeModule","children":[{"path":"","component":"HomeComponent","children":[{"path":"chat","component":"ChatComponent"},{"path":"about","component":"AboutComponent"},{"path":"","redirectTo":"/home/chat","pathMatch":"full"}]}],"kind":"module"}],"module":"HomeModule"}]},{"path":"","redirectTo":"/","pathMatch":"full"},{"path":"**","redirectTo":"/home","pathMatch":"full"}],"kind":"module"}]}