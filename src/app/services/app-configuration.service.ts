import { Injectable } from '@angular/core';
import { EnviromentRootPath, EnviromentRootApi } from '../../app/config';

@Injectable({
  providedIn: 'root',
})
export class AppConfigurationService {
  baseRootApi: string = '';

  constructor() {
    this.initRootApi();
  }

  initRootApi(): void {
    const rootPath: string = window.location.origin;

    switch (rootPath) {
      case EnviromentRootPath.Dev:
        this.baseRootApi = EnviromentRootApi.Dev;
        break;
      case EnviromentRootPath.Product:
        this.baseRootApi = EnviromentRootApi.Product;
        break;
      case EnviromentRootPath.Localhost:
        this.baseRootApi = EnviromentRootApi.Localhost;
        break;
    }
  }
}
