import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    ProtheusLibCoreModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  //Ao carregar a página
  constructor(private proAppConfigService: ProAppConfigService, private router: Router) {
    if (! this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
      sessionStorage.setItem("insideProtheus", "0");
      sessionStorage.setItem("ERPTOKEN", '{"access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6ImRhbmllbC5hdGlsaW8iLCJpYXQiOjE3NTAzMjU5NzYsInVzZXJpZCI6IjAwMDAwNCIsImV4cCI6MTc1MDMyOTU3NiwiZW52SWQiOiJQUk9USEVVU19PUCJ9.R0VfPdL9VfkromkrDn3Boe0V9fIZ4cqBn2sYSPyFQrENT0jQ6ZCMxlzAmkFy4V_WuvwfKmSVeHXKsweBoDCDxrGLtAhKx6XLSI7OyVOPipwSKpyGkTjtkr0uPYuu4K6i5kRQn0oO1UuHV4rBcw7XWlImHtjNoAuVaUI84sVXHqw7YQCaVuSlWTdEr03TdEPpoisuBz07i-bxq7e56DLc5LgjyhOO5-Lld3KA1cAVcb3FaeSWl8X3aheneWsw3w-3-pZUMLxlWDWJihtmnIij4K1HxnXLxjiyQeY3wh6NJ9cwwrsxu-NT2_dOSDXFUXqTV8lHr8zYNuyUsTuOLLvZ2A","refresh_token": "naPdpnp1C8fAr6dR4zNzc2--.irD44lZmDMzBqKxSzAM2PlGHkySNJOmcYOV3QA84GqpJl-zhzXv_QR8iIZOTnMgdI7A5RS5VHiKpFpfqnifuwR5dG5MMlZvQCgrsFjWm_PIQPQhpGLHkKM_Lo7d2L-Lpc9QdR-qo3pVIOFujeVo8aRXXsG5BK5SIvvY-TCSUFT0bj5RUMRrHS_v08dWIuLXSGkUl1-gxH8o2HKZZqBeV3xZndLoShw.ASIiFPmDKD24fLJAZ5ZFuAcAx5QfGY6rpEH_vk0DKmBSrbd2hbY14c-qVDjdi_-ardiSwyBmtxsCCTSimXJTBniOpwjOwg8PM6qCxJVZIqzze65Uao0o9v--2cCmIewVF4x2lox78x-yW2RCffRBNNbCo8CwPMSlWRB5ibufdx4HPhBsq7P41p928tvfI8wUbq9WjzRToEI-vEeIS8MQhNgGIYy6yfju08IUy_b_aQn9brXcGssibyjRARe9i06NOIWOgaSX4vTyt44d2yY2xCdw_v-dH-C93J7YCbc-jrUmaFlJI20Bq5UHLIzzGEje0sJWZ7FEKSx3axygWZ-Lng","scope": "default","token_type": "Bearer","expires_in": 3600, "hasMFA": false}');
    }
    else {
      sessionStorage.setItem("insideProtheus", "1");
    }
    
  }  

  //As opções
  readonly menus: Array<PoMenuItem> = [
    { label: 'Visualizar',        action: this.viewClick.bind(this),   icon: 'po-icon-clipboard', shortLabel: 'Visualizar' },
    { label: 'Ajuda (Help)',      action: this.aboutClick.bind(this),  icon: 'po-icon-help',      shortLabel: 'Ajuda' },
    { label: 'Sair',              action: this.closeApp.bind(this),    icon: 'po-icon-exit',      shortLabel: 'Sair' }
  ];

  //Visualizar
  private viewClick() {
    this.router.navigate(['/', 'view']);
  }

  //Sobre
  private aboutClick() {
    this.router.navigate(['/', 'about']);
  }

  //Sair
  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert("Clique não veio do Protheus");
    }
  }
}
