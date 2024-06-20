import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CarouselModule } from 'primeng/carousel';
import { StepsModule } from 'primeng/steps';
import { DividerModule } from 'primeng/divider';
import { DialogModule} from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    ButtonModule,
    TagModule,
    TableModule,
    InputNumberModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    CheckboxModule,
    ToastModule,
    ToolbarModule,
    FieldsetModule,
    InputMaskModule,
    FileUploadModule,
    InputTextareaModule,
    CarouselModule,
    StepsModule,
    DividerModule,
    DialogModule,
    SelectButtonModule,
    AccordionModule,
    ConfirmDialogModule
  ],
  exports: [
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    ButtonModule,
    TagModule,
    TableModule,
    InputNumberModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    CheckboxModule,
    ToastModule,
    ToolbarModule,
    FieldsetModule,
    InputMaskModule,
    FileUploadModule,
    InputTextareaModule,
    CarouselModule,
    StepsModule,
    DividerModule,
    DialogModule,
    SelectButtonModule,
    AccordionModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService, MessageService],
})
export class SharedPrimeNgModule {}
