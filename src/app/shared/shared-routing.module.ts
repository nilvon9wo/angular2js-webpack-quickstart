import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HighlightDemoComponent } from './highlight-demo/highlight-demo.component';

const routes: Routes = [
  { path: 'highlight-demo', component: HighlightDemoComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}