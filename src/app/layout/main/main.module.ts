import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { PaginationConfig, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgApexchartsModule } from 'ng-apexcharts';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AlertModule } from 'ngx-bootstrap/alert';

import { CmsContactComponent } from 'src/app/pages/contact/cms-contact/cms-contact.component';
import { EventCreateComponent } from 'src/app/pages/event/event-create/event-create.component';
import { AdvCreateComponent } from 'src/app/pages/advertisement/adv-create/adv-create.component';
import { AdvListComponent } from 'src/app/pages/advertisement/adv-list/adv-list.component';
import { EventListComponent } from 'src/app/pages/event/event-list/event-list.component';
import { HomeCreateComponent } from 'src/app/pages/home/home-create/home-create.component';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AboutbriefComponent } from 'src/app/pages/about/aboutbrief/aboutbrief.component';
import { AboutbriefEditComponent } from 'src/app/pages/about/aboutbrief-edit/aboutbrief-edit.component';
import { AboutbriefListComponent } from 'src/app/pages/about/aboutbrief-list/aboutbrief-list.component';
import { FaqCreateComponent } from 'src/app/pages/faq/faq-create/faq-create.component';
import { FaqListComponent } from 'src/app/pages/faq/faq-list/faq-list.component';
import { EventEditComponent } from "../../pages/event/event-edit/event-edit.component";
import { PhilsysCreateComponent } from "../../pages/philsysnumber/philsys-create/philsys-create.component";
import { PhilsysListComponent } from "../../pages/philsysnumber/philsys-list/philsys-list.component";
import { PhilsysUpdateComponent } from "../../pages/philsysnumber/philsys-update/philsys-update.component";
import { LegalCreateComponent } from "../../pages/legalbases/legal-create/legal-create.component";
import { LegalListComponent } from "../../pages/legalbases/legal-list/legal-list.component";
import { LegalUpdateComponent } from "../../pages/legalbases/legal-update/legal-update.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CareersCreateComponent } from "../../pages/careers/careers-create/careers-create.component";
import { CareersListComponent } from "../../pages/careers/careers-list/careers-list.component";
import { CareersUpdateComponent } from "../../pages/careers/careers-update/careers-update.component";
import { PrivacyCreateComponent } from "../../pages/dataprivacy/privacy-create/privacy-create.component";
import { PrivacyListComponent } from "../../pages/dataprivacy/privacy-list/privacy-list.component";
import { PrivacyUpdateComponent } from "../../pages/dataprivacy/privacy-update/privacy-update.component";
import { TransparancyCreateComponent } from "../../pages/transparancy/transparancy-create/transparancy-create.component";
import { TransparancyListComponent } from "../../pages/transparancy/transparancy-list/transparancy-list.component";
import { TransparancyUpdateComponent } from "../../pages/transparancy/transparancy-update/transparancy-update.component";
import {
  Registerstep1CreateComponent
} from "../../pages/registration/registerstep1-create/registerstep1-create.component";
import { Registerstep1ListComponent } from "../../pages/registration/registerstep1-list/registerstep1-list.component";
import {
  Registerstep1UpdateComponent
} from "../../pages/registration/registerstep1-update/registerstep1-update.component";
import {
  Registerstep2UpdateComponent
} from "../../pages/registration/registerstep2-update/registerstep2-update.component";
import {
  Registerstep2CreateComponent
} from "../../pages/registration/registerstep2-create/registerstep2-create.component";
import { Registerstep2ListComponent } from "../../pages/registration/registerstep2-list/registerstep2-list.component";
import {
  SupportdocumentCreateComponent
} from "../../pages/registration/supportdocument-create/supportdocument-create.component";
import {
  SupportdocumentListComponent
} from "../../pages/registration/supportdocument-list/supportdocument-list.component";
import {
  SupportdocumentUpdateComponent
} from "../../pages/registration/supportdocument-update/supportdocument-update.component";
import { RegistermyidCreateComponent } from "../../pages/registration/registermyid-create/registermyid-create.component";
import { RegistermyidListComponent } from "../../pages/registration/registermyid-list/registermyid-list.component";
import { RegistermyidUpdateComponent } from "../../pages/registration/registermyid-update/registermyid-update.component";
import {
  RegistercenterCreateComponent
} from "../../pages/registration/registercenter-create/registercenter-create.component";
import { RegistercenterListComponent } from "../../pages/registration/registercenter-list/registercenter-list.component";
import {
  RegistercenterUpdateComponent
} from "../../pages/registration/registercenter-update/registercenter-update.component";
import { CompositionComponent } from "../../pages/philsyscouncil/composition/composition.component";
import { FunctionComponent } from "../../pages/philsyscouncil/function/function.component";
import { ResolutionComponent } from "../../pages/philsyscouncil/resolution/resolution.component";
import { InteragencyComponent } from "../../pages/philsyscouncil/interagency/interagency.component";
import { CompositionListComponent } from "../../pages/philsyscouncil/composition-list/composition-list.component";
import { CompositionEditComponent } from "../../pages/philsyscouncil/composition-edit/composition-edit.component";
import { FintionListComponent } from "../../pages/philsyscouncil/fintion-list/fintion-list.component";
import { FunctionEditComponent } from "../../pages/philsyscouncil/function-edit/function-edit.component";
import { InteragenctListComponent } from "../../pages/philsyscouncil/interagenct-list/interagenct-list.component";
import { InteragenctEditComponent } from "../../pages/philsyscouncil/interagenct-edit/interagenct-edit.component";
import { ResolitionListComponent } from "../../pages/philsyscouncil/resolition-list/resolition-list.component";
import { ResolutionEditComponent } from "../../pages/philsyscouncil/resolution-edit/resolution-edit.component";
import { FaqEditComponent } from "../../pages/faq/faq-edit/faq-edit.component";
import { MediaComponent } from "../../pages/knoleagemanagement/medias/media/media.component";
import { DocumentComponent } from "../../pages/knoleagemanagement/docunemts/document/document.component";
import { PolicesComponent } from "../../pages/knoleagemanagement/policesss/polices/polices.component";
import { ProceduresComponent } from "../../pages/knoleagemanagement/proceduress/procedures/procedures.component";
import { ResourcesComponent } from "../../pages/knoleagemanagement/resourcess/resources/resources.component";
import {
  ResourcesListComponent
} from "../../pages/knoleagemanagement/resourcess/resources-list/resources-list.component";
import {
  ResourcesEditComponent
} from "../../pages/knoleagemanagement/resourcess/resources-edit/resources-edit.component";
import {
  ProceduresListComponent
} from "../../pages/knoleagemanagement/proceduress/procedures-list/procedures-list.component";
import {
  ProceduresEditComponent
} from "../../pages/knoleagemanagement/proceduress/procedures-edit/procedures-edit.component";
import { PolicesListComponent } from "../../pages/knoleagemanagement/policesss/polices-list/polices-list.component";
import { PolicesEditComponent } from "../../pages/knoleagemanagement/policesss/polices-edit/polices-edit.component";
import { DocumentListComponent } from "../../pages/knoleagemanagement/docunemts/document-list/document-list.component";
import { DocumentEditComponent } from "../../pages/knoleagemanagement/docunemts/document-edit/document-edit.component";
import { MediaListComponent } from "../../pages/knoleagemanagement/medias/media-list/media-list.component";
import { MediaEditComponent } from "../../pages/knoleagemanagement/medias/media-edit/media-edit.component";
import { UsecaseComponent } from "../../pages/usecases/usecase/usecase.component";
import { UsecaseListComponent } from "../../pages/usecases/usecase-list/usecase-list.component";
import { UsecaseEditComponent } from "../../pages/usecases/usecase-edit/usecase-edit.component";
import { PhilypscheckComponent } from "../../pages/philypscheck/philypscheck/philypscheck.component";
import { PhilypscheckListComponent } from "../../pages/philypscheck/philypscheck-list/philypscheck-list.component";
import { PhilypscheckEditComponent } from "../../pages/philypscheck/philypscheck-edit/philypscheck-edit.component";
import { EphilidComponent } from "../../pages/ephilId/ephilid/ephilid.component";
import { EphilidListComponent } from "../../pages/ephilId/ephilid-list/ephilid-list.component";
import { EphilidEditComponent } from "../../pages/ephilId/ephilid-edit/ephilid-edit.component";
import { TestimonialComponent } from "../../pages/testi/testimonial/testimonial.component";
import { TestimonialListComponent } from "../../pages/testi/testimonial-list/testimonial-list.component";
import { TestimonialEditComponent } from "../../pages/testi/testimonial-edit/testimonial-edit.component";
import { EphilidFaqComponent } from "../../pages/ephilId/ephilid-faq/ephilid-faq.component";
import { EphilidFaqListComponent } from "../../pages/ephilId/ephilid-faq-list/ephilid-faq-list.component";
import { EphilidFaqEditComponent } from "../../pages/ephilId/ephilid-faq-edit/ephilid-faq-edit.component";
import { RelyingpartyComponent } from "../../pages/relyingparty/relyingparty/relyingparty.component";
import { RpListComponent } from "../../pages/relyingparty/rp-list/rp-list.component";
import { RpEditComponent } from "../../pages/relyingparty/rp-edit/rp-edit.component";
import { OpertionalmodelComponent } from "../../pages/operationalmodel/opertionalmodel/opertionalmodel.component";
import { OperListComponent } from "../../pages/operationalmodel/oper-list/oper-list.component";
import { BiopartnerComponent } from "../../pages/partnerbio/biopartner/biopartner.component";
import { OperEditComponent } from "../../pages/operationalmodel/oper-edit/oper-edit.component";
import { BiopartListComponent } from "../../pages/partnerbio/biopart-list/biopart-list.component";
import { BiopartEditComponent } from "../../pages/partnerbio/biopart-edit/biopart-edit.component";
import { TspComponent } from "../../pages/tsp/tsp/tsp.component";
import { TspListComponent } from "../../pages/tsp/tsp-list/tsp-list.component";
import { TspEditComponent } from "../../pages/tsp/tsp-edit/tsp-edit.component";
import { AuthdevComponent } from "../../pages/authdev/authdev/authdev.component";
import { AuthdevListComponent } from "../../pages/authdev/authdev-list/authdev-list.component";
import { AuthdevEditComponent } from "../../pages/authdev/authdev-edit/authdev-edit.component";
import { DevbioComponent } from "../../pages/deviceabio/devbio/devbio.component";
import { DevbioListComponent } from "../../pages/deviceabio/devbio-list/devbio-list.component";
import { DevbioEditComponent } from "../../pages/deviceabio/devbio-edit/devbio-edit.component";
import { AuthdocumentComponent } from "../../pages/authdocument/authdocument/authdocument.component";
import { AuthdocListComponent } from "../../pages/authdocument/authdoc-list/authdoc-list.component";
import { AuthdocEditComponent } from "../../pages/authdocument/authdoc-edit/authdoc-edit.component";
import { QrscannerComponent } from "../../pages/qrscanner/qrscanner/qrscanner.component";
import { QrscanListComponent } from "../../pages/qrscanner/qrscan-list/qrscan-list.component";
import { QrscanEditComponent } from "../../pages/qrscanner/qrscan-edit/qrscan-edit.component";
import { EkycComponent } from "../../pages/offline-ekyc/ekyc/ekyc.component";
import { EkycListComponent } from "../../pages/offline-ekyc/ekyc-list/ekyc-list.component";
import { EkycEditComponent } from "../../pages/offline-ekyc/ekyc-edit/ekyc-edit.component";
import { DevsectionComponent } from "../../pages/devsection/devsection/devsection.component";
import { DevsectionListComponent } from "../../pages/devsection/devsection-list/devsection-list.component";
import { DevsectionEditComponent } from "../../pages/devsection/devsection-edit/devsection-edit.component";
import { UsercreationComponent } from "../../pages/usercreation/usercreation/usercreation.component";
import { UserlistComponent } from "../../pages/usercreation/userlist/userlist.component";
import { UserupdateComponent } from "../../pages/usercreation/userupdate/userupdate.component";

import { HomeImageComponent } from "../../pages/home/home-image/home-image.component";
import { HomeImageEditComponent } from "../../pages/home/home-image-edit/home-image-edit.component";
import { HomeImageListComponent } from "../../pages/home/home-image-list/home-image-list.component";
import { HomeGraphComponent } from "../../pages/home/home-graph/home-graph.component";
import { HomeGraphEditComponent } from "../../pages/home/home-graph-edit/home-graph-edit.component";
import { HomeGraphListComponent } from "../../pages/home/home-graph-list/home-graph-list.component";
import { ImageCreateComponent } from "../../pages/event/event-image/image-create/image-create.component";
import { ImageEditComponent } from "../../pages/event/event-image/image-edit/image-edit.component";
import { ImageListComponent } from "../../pages/event/event-image/image-list/image-list.component";
import { GalleryCreateComponent } from "../../pages/ephilId/Ephil-Gallery/gallery-create/gallery-create.component";
import { GalleryListComponent } from "../../pages/ephilId/Ephil-Gallery/gallery-list/gallery-list.component";
import { GalleryEditComponent } from "../../pages/ephilId/Ephil-Gallery/gallery-edit/gallery-edit.component";
import { FeaturevideoCreateComponent } from "../../pages/featurevideo/featurevideo-create/featurevideo-create.component";
import { FeaturevideoListComponent } from "../../pages/featurevideo/featurevideo-list/featurevideo-list.component";
import { FeaturevideoEditComponent } from "../../pages/featurevideo/featurevideo-edit/featurevideo-edit.component";
import { AccountCreationComponent } from "../../pages/account-creation/account-creation.component";
import { authGuard } from 'src/app/auth.guard';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";


const routes: Routes = [

  {
    path: '', component: MainComponent, canActivate: [authGuard], children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },

      { path: 'user', redirectTo: '/user/create', pathMatch: 'full' },
      { path: 'user/create', component: UsercreationComponent, data: { breadcrumb: 'User Creation' } },
      {
        path: 'user/list',
        data: { breadcrumb: 'List' }, // Breadcrumb for '/user/list' path\
        children: [
          { path: '', component: UserlistComponent }, // Default child route for '/user/list'
          { path: 'edit/:id', component: UserupdateComponent, data: { breadcrumb: 'Edit' } } // Breadcrumb for '/user/list/edit/:id' path
        ]
      },

      {
        path: 'cms', children: [
          { path: 'home', component: HomeCreateComponent, data: { breadcrumb: 'CMS-Home' } },
          {
            path: 'homeimage', data: { breadcrumb: 'CMS-Home Image' },
            children: [
              { path: '', component: HomeImageListComponent },
              { path: 'create', component: HomeImageComponent, data: { breadcrumb: 'Upload Image' } },
              { path: 'edit/:id', component: HomeImageEditComponent, data: { breadcrumb: 'Edit Image' } },
            ]
          },
          {
            path: 'homegraph', data: { breadcrumb: 'CMS-Home_Graph' },
            children: [
              { path: '', component: HomeGraphListComponent },
              { path: 'create', component: HomeGraphComponent, data: { breadcrumb: 'Upload Graph' } },
              { path: 'edit/:id', component: HomeGraphEditComponent, data: { breadcrumb: 'Edit Graph' } },
            ]
          },
          {
            path: 'philsys-briefer', data: { breadcrumb: 'PhilSys Briefer List' },
            children: [
              { path: '', component: AboutbriefListComponent },
              { path: 'create', component: AboutbriefComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: AboutbriefEditComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'faq', data: { breadcrumb: 'FAQ List' },
            children: [
              { path: '', component: FaqListComponent },
              { path: 'create', component: FaqCreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: FaqEditComponent, data: { breadcrumb: 'Edit' } },
            ]
          },

          {
            path: 'philsys-number', data: { breadcrumb: 'PhilSys Number' },
            children: [
              { path: '', component:  PhilsysListComponent},
              { path: 'create', component: PhilsysCreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: PhilsysUpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'legal-bases', data: { breadcrumb: 'Legal bases' },
            children: [
              { path: '', component:  LegalListComponent},
              { path: 'create', component: LegalCreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: LegalUpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'data-privacy', data: { breadcrumb: 'Data privacy' },
            children: [
              { path: '', component:  PrivacyListComponent},
              { path: 'create', component: PrivacyCreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: PrivacyUpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'careers', data: { breadcrumb: 'Careers' },
            children: [
              { path: '', component:  CareersListComponent},
              { path: 'create', component: CareersCreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: CareersUpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'transparency', data: { breadcrumb: 'Transparancy' },
            children: [
              { path: '', component:  TransparancyListComponent},
              { path: 'create', component: TransparancyCreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: TransparancyUpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },


          {
            path: 'council', children: [
              {
                path: 'composition', data: { breadcrumb: 'Composition' },
                children: [
                  { path: '', component:  CompositionListComponent},
                  { path: 'create', component: CompositionComponent, data: { breadcrumb: 'Create' } },
                  { path: 'edit/:id', component: CompositionEditComponent, data: { breadcrumb: 'Edit' } },
                ]
              },
              {
                path: 'function', data: { breadcrumb: 'Function' },
                children: [
                  { path: '', component:  FintionListComponent},
                  { path: 'create', component: FunctionComponent, data: { breadcrumb: 'Create' } },
                  { path: 'edit/:id', component: FunctionEditComponent, data: { breadcrumb: 'Edit' } },
                ]
              },
              {
                path: 'inter-agency', data: { breadcrumb: 'Inter agency' },
                children: [
                  { path: '', component:  InteragenctListComponent},
                  { path: 'create', component: InteragencyComponent, data: { breadcrumb: 'Create' } },
                  { path: 'edit/:id', component: InteragenctEditComponent, data: { breadcrumb: 'Edit' } },
                ]
              },
              {
                path: 'resolution', data: { breadcrumb: 'Resolution' },
                children: [
                  { path: '', component:  ResolitionListComponent},
                  { path: 'create', component: ResolutionComponent, data: { breadcrumb: 'Create' } },
                  { path: 'edit/:id', component: ResolutionEditComponent, data: { breadcrumb: 'Edit' } },
                ]
              },





            ]
          },

          {
            path: 'registration-process', data: { breadcrumb: 'Registration Process' },
            children: [
              { path: '', component:  Registerstep1ListComponent},
              { path: 'create', component: Registerstep1CreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: Registerstep1UpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },

          {
            path: 'registration-remainder-process', data: { breadcrumb: 'Registration Remainder and Process' },
            children: [
              { path: '', component:  Registerstep2ListComponent},
              { path: 'create', component: Registerstep2CreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: Registerstep2UpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },

          {
            path: 'support-document', data: { breadcrumb: 'Support Document' },
            children: [
              { path: '', component:  SupportdocumentListComponent},
              { path: 'create', component: SupportdocumentCreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: SupportdocumentUpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'registration-center', data: { breadcrumb: 'Registration Center' },
            children: [
              { path: '', component:  RegistercenterListComponent},
              { path: 'create', component: RegistercenterCreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: RegistercenterUpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },

          {
            path: 'registration-my-id', data: { breadcrumb: 'Registration My Id' },
            children: [
              { path: '', component:  RegistermyidListComponent},
              { path: 'create', component: RegistermyidCreateComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: RegistermyidUpdateComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'use-case', data: { breadcrumb: 'Use Case' },
            children: [
              { path: '', component:  UsecaseListComponent},
              { path: 'create', component: UsecaseComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: UsecaseEditComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'philsys-check', data: { breadcrumb: 'PhilSys Check' },
            children: [
              { path: '', component:  PhilypscheckListComponent},
              { path: 'create', component: PhilypscheckComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: PhilypscheckEditComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'ephilid', data: { breadcrumb: 'EPhilId' },
            children: [
              { path: '', component:  EphilidListComponent},
              { path: 'create', component: EphilidComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: EphilidEditComponent, data: { breadcrumb: 'Edit' } },
            ]
          },
          {
            path: 'ephilid-faq', data: { breadcrumb: 'EPhilId FAQ' },
            children: [
              { path: '', component:  EphilidFaqListComponent},
              { path: 'create', component: EphilidFaqComponent, data: { breadcrumb: 'Create' } },
              { path: 'edit/:id', component: EphilidFaqEditComponent, data: { breadcrumb: 'Edit' } },
            ]
          },



        ]
      },


      { path: 'myaccount', component: AccountCreationComponent, data: { breadcrumb: 'Account' } },

      {
        path: 'home-image', component: HomeImageComponent,
      },
      {
        path: 'homeimage-edit/:id', component: HomeImageEditComponent,
      },
      { path: 'homeimage-list', component: HomeImageListComponent },



      {
        path: 'event-image', component: ImageCreateComponent,
      },
      {
        path: 'eventimage-edit/:id', component: ImageEditComponent,
      },
      {
        path: 'eventimage-list', component: ImageListComponent,
      },
      {
        path: 'event-create', component: EventCreateComponent,
      },
      {
        path: 'event-list', component: EventListComponent,
      },
      { path: 'event-edit/:id', component: EventEditComponent },
      {
        path: 'eimage-create', component: GalleryCreateComponent,
      },
      {
        path: 'eimage-list', component: GalleryListComponent,
      },
      { path: 'eimage-edit/:id', component: GalleryEditComponent },
      {
        path: 'adv-create', component: AdvCreateComponent,
      }
      , {
        path: 'adv-list', component: AdvListComponent,
      }
      ,
      { path: 'contact', component: CmsContactComponent },

      { path: 'mediakno-create', component: MediaComponent },
      { path: 'mediakno-list', component: MediaListComponent },
      { path: 'mediakno-edit/:id', component: MediaEditComponent },


      { path: 'documentkno-create', component: DocumentComponent },
      { path: 'documentkno-list', component: DocumentListComponent },
      { path: 'documentkno-edit/:id', component: DocumentEditComponent },


      { path: 'policeskno-create', component: PolicesComponent },
      { path: 'policeskno-list', component: PolicesListComponent },
      { path: 'policeskno-edit/:id', component: PolicesEditComponent },

      { path: 'procedurekno-create', component: ProceduresComponent },
      { path: 'procedurekno-list', component: ProceduresListComponent },
      { path: 'procedurekno-edit/:id', component: ProceduresEditComponent },


      { path: 'resorceskno-create', component: ResourcesComponent },
      { path: 'resorceskno-list', component: ResourcesListComponent },
      { path: 'resorceskno-edit/:id', component: ResourcesEditComponent },

      { path: 'usecase-create', component: UsecaseComponent },
      { path: 'usecase-list', component: UsecaseListComponent },
      { path: 'usecase-edit/:id', component: UsecaseEditComponent },




      { path: 'testimonial-create', component: TestimonialComponent },
      { path: 'testimonial-list', component: TestimonialListComponent },
      { path: 'testimonial-edit/:id', component: TestimonialEditComponent },


      { path: 'rp-create', component: RelyingpartyComponent },
      { path: 'rp-list', component: RpListComponent },
      { path: 'rp-edit/:id', component: RpEditComponent },

      { path: 'op-create', component: OpertionalmodelComponent },
      { path: 'op-list', component: OperListComponent },
      { path: 'op-edit/:id', component: OperEditComponent },

      { path: 'biopartner-create', component: BiopartnerComponent },
      { path: 'biopartner-list', component: BiopartListComponent },
      { path: 'biopartner-edit/:id', component: BiopartEditComponent },

      { path: 'tsp-create', component: TspComponent },
      { path: 'tsp-list', component: TspListComponent },
      { path: 'tsp-edit/:id', component: TspEditComponent },

      { path: 'devauth-create', component: AuthdevComponent },
      { path: 'devauth-list', component: AuthdevListComponent },
      { path: 'devauth-edit/:id', component: AuthdevEditComponent },

      { path: 'biodev-create', component: DevbioComponent },
      { path: 'biodev-list', component: DevbioListComponent },
      { path: 'biodev-edit/:id', component: DevbioEditComponent },

      { path: 'authdocs-create', component: AuthdocumentComponent },
      { path: 'authdocs-list', component: AuthdocListComponent },
      { path: 'authdocs-edit/:id', component: AuthdocEditComponent },

      { path: 'qrscan-create', component: QrscannerComponent },
      { path: 'qrscan-list', component: QrscanListComponent },
      { path: 'qrscan-edit/:id', component: QrscanEditComponent },

      { path: 'ekyc-create', component: EkycComponent },
      { path: 'ekyc-list', component: EkycListComponent },
      { path: 'ekyc-edit/:id', component: EkycEditComponent },

      { path: 'devsec-create', component: DevsectionComponent },
      { path: 'devsec-list', component: DevsectionListComponent },
      { path: 'devsec-edit/:id', component: DevsectionEditComponent },

      { path: 'testimonial-create', component: TestimonialComponent },
      { path: 'testimonial-list', component: TestimonialListComponent },
      { path: 'testimonial-edit/:id', component: TestimonialEditComponent },

      { path: 'featurevideo-create', component: FeaturevideoCreateComponent },
      { path: 'featurevideo-list', component: FeaturevideoListComponent },
      { path: 'featurevideo-edit/:id', component: FeaturevideoEditComponent },

    ],

  },
];


@NgModule({

  declarations: [
    MainComponent,
    FeaturevideoCreateComponent,
    FeaturevideoListComponent,
    FeaturevideoEditComponent,
    BreadcrumbComponent,

    HeaderComponent, SidebarComponent, FooterComponent, DashboardComponent, CmsContactComponent,
    EventCreateComponent, AdvCreateComponent, AdvListComponent, EventListComponent, HomeCreateComponent,
    EventEditComponent, AboutbriefComponent, AboutbriefListComponent, AboutbriefEditComponent, FaqCreateComponent,
    FaqListComponent, FaqEditComponent, PhilsysCreateComponent, PhilsysListComponent, PhilsysUpdateComponent,
    LegalCreateComponent, LegalListComponent, LegalUpdateComponent, PrivacyCreateComponent, PrivacyListComponent,
    PrivacyUpdateComponent, CareersCreateComponent, CareersListComponent, CareersUpdateComponent, TransparancyCreateComponent,
    TransparancyListComponent, TransparancyUpdateComponent, Registerstep1CreateComponent, Registerstep1ListComponent,
    Registerstep1UpdateComponent, Registerstep2UpdateComponent, Registerstep2CreateComponent, Registerstep2ListComponent,
    SupportdocumentCreateComponent, SupportdocumentListComponent, SupportdocumentUpdateComponent, RegistermyidCreateComponent,
    RegistermyidListComponent, RegistermyidUpdateComponent, RegistercenterCreateComponent, RegistercenterListComponent,
    RegistercenterUpdateComponent, CompositionComponent, CompositionListComponent, CompositionEditComponent, FunctionComponent,
    FintionListComponent, FunctionEditComponent, InteragencyComponent, InteragenctListComponent, InteragenctEditComponent,
    ResolutionComponent, ResolitionListComponent, ResolutionEditComponent, MediaComponent, DocumentComponent, PolicesComponent,
    ProceduresComponent, ResourcesComponent, ResourcesListComponent, ResourcesEditComponent, ProceduresListComponent,
    ProceduresEditComponent, PolicesListComponent, PolicesEditComponent, DocumentListComponent, DocumentEditComponent,
    MediaListComponent, MediaEditComponent, DevsectionEditComponent, DevsectionListComponent, DevsectionComponent, EkycEditComponent,
    EkycComponent, EkycListComponent, QrscannerComponent, QrscanEditComponent, QrscanListComponent, AuthdocumentComponent,
    AuthdocListComponent, AuthdocEditComponent, DevbioComponent, DevbioEditComponent, DevbioListComponent, AuthdevEditComponent, AuthdevComponent,
    AuthdevListComponent, TspEditComponent, TspComponent, TspListComponent, BiopartnerComponent, BiopartEditComponent, BiopartListComponent,
    OpertionalmodelComponent, OperEditComponent, OperListComponent, RpListComponent, RpEditComponent, RelyingpartyComponent,
    EphilidFaqComponent, EphilidFaqEditComponent, EphilidFaqListComponent, TestimonialComponent, TestimonialListComponent, TestimonialEditComponent,
    EphilidComponent, EphilidListComponent, EphilidEditComponent, PhilypscheckComponent, PhilypscheckListComponent,
    PhilypscheckEditComponent, UsecaseComponent, UsecaseEditComponent, UsecaseListComponent,
    UsercreationComponent, UserlistComponent, UserupdateComponent,

    TestimonialComponent,
    TestimonialEditComponent,
    TestimonialListComponent,

    PhilypscheckEditComponent, UsecaseComponent, UsecaseEditComponent, UsecaseListComponent, GalleryCreateComponent, GalleryEditComponent,
    GalleryListComponent,
    HomeImageComponent,
    HomeImageEditComponent,
    HomeImageListComponent,
    HomeGraphComponent,
    HomeGraphEditComponent,
    HomeGraphListComponent,
    ImageCreateComponent,
    ImageEditComponent,
    ImageListComponent,

  ],
  imports: [
    CommonModule,
    NgOtpInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    PaginationModule,
    NgApexchartsModule,
    BsDatepickerModule,
    TimepickerModule,
    AlertModule,
    RichTextEditorAllModule,
    SlickCarouselModule

  ],
  providers: [
    PaginationConfig,

  ]
})
export class MainModule {
}
