import { NgModule } from '@angular/core';

// PrimeNG modules (view readme.md for documentation)
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';

@NgModule({
  exports: [
    TableModule,
    DropdownModule,
    ButtonModule,
    RippleModule,
    DialogModule,
    InputTextModule,
    TooltipModule,
    ToolbarModule,
    ToastModule,
    CalendarModule,
    ConfirmDialogModule,
    MessagesModule,
    TabViewModule,
    StepsModule,
    KeyFilterModule,
    AutoCompleteModule,
    CheckboxModule,
    InputSwitchModule,
    TagModule,
    ChartModule,
  ]
})
export class PrimeNgModule { }
