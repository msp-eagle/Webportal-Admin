// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const API = {

  BASEPATH_LOCAL:'https://api.apps-external.uat2.phylsys.gov.ph/v1/web-service/'

  // BASEPATH_LOCAL: 'http://192.168.11.50:8094/v1/web-service/',
  
}

export const environment = {
  production: false,

  KMDS_AUTH_BASEPATH: API.BASEPATH_LOCAL,
  KMDS_USER_BASEPATH: API.BASEPATH_LOCAL + 'user/',
  PHY_EVENT_BASEPATH: API.BASEPATH_LOCAL + 'event/',
  PHY_ADVER_BASEPATH: API.BASEPATH_LOCAL + 'adver/',
  PHY_HOME_BASEPATH: API.BASEPATH_LOCAL + 'home/',
  PHY_CONTACT_BASEPATH: API.BASEPATH_LOCAL + 'contact/',
  PHY_ABOUTBRIEF_BASEPATH: API.BASEPATH_LOCAL + 'about/',
  PHY_FAQ_BASEPATH: API.BASEPATH_LOCAL + 'faq/',
  PHY_PHILSYSNUMBER_BASEPATH: API.BASEPATH_LOCAL + 'aboutNumbers/',
  PHY_LEGAL_BASEPATH: API.BASEPATH_LOCAL + 'aboutLegal/',
  PHY_CAREERS_BASEPATH: API.BASEPATH_LOCAL + 'aboutCareers/',
  PHY_TRANSPARANCY_BASEPATH: API.BASEPATH_LOCAL + 'transparency/',
  PHY_DATAPRIVACY_BASEPATH: API.BASEPATH_LOCAL + 'aboutDataPrivacy/',
  PHY_REGISTERMYID_BASEPATH: API.BASEPATH_LOCAL + 'registermyid/',
  PHY_REGISTERONE_BASEPATH: API.BASEPATH_LOCAL + 'registerone/',
  PHY_REGISTERTWO_BASEPATH: API.BASEPATH_LOCAL + 'registertwo/',
  PHY_SUPPORTDOCUMENT_BASEPATH: API.BASEPATH_LOCAL + 'supportdocument/',
  PHY_REGISTERCENTER_BASEPATH: API.BASEPATH_LOCAL + 'registercenter/',
  PHY_COMPOSITION_BASEPATH: API.BASEPATH_LOCAL + 'compisition/',
  PHY_FUNCTION_BASEPATH: API.BASEPATH_LOCAL + 'function/',
  PHY_INTERAGENCY_BASEPATH: API.BASEPATH_LOCAL + 'interagency/',
  PHY_RESOLUTION_BASEPATH: API.BASEPATH_LOCAL + 'resolution/',
  PHY_DOCUMENT_KNO_BASEPATH: API.BASEPATH_LOCAL + 'documentknowlege/',
  PHY_MEDIA_KNO_BASEPATH: API.BASEPATH_LOCAL + 'mediaknowlege/',
  POLICIES_KNO_BASEPATH: API.BASEPATH_LOCAL + 'policiesknowlege/',
  PROCEDURES_KNO_BASEPATH: API.BASEPATH_LOCAL + 'proceduresknowlege/',
  PHY_RESOURCES_KNO_BASEPATH: API.BASEPATH_LOCAL + 'resourcesknowlege/',
  PHY_USECASE_BASEPATH: API.BASEPATH_LOCAL + 'usecase/',
  PHY_PHILPYSYSCHECK_BASEPATH: API.BASEPATH_LOCAL + 'philysyscheck/',
  PHY_EPHILID_BASEPATH: API.BASEPATH_LOCAL + 'ephilids/',
  PHY_TESTIMONIAL_BASEPATH: API.BASEPATH_LOCAL + 'testimonial/',
  PHY_EPHILIDFAQ_BASEPATH: API.BASEPATH_LOCAL + 'ephilidfaq/',
  PHY_RP_BASEPATH: API.BASEPATH_LOCAL + 'rp/',
  PHY_OP_BASEPATH: API.BASEPATH_LOCAL + 'op/',
  PHY_BIOPARTNER_BASEPATH: API.BASEPATH_LOCAL + 'biopart/',
  PHY_TSP_BASEPATH: API.BASEPATH_LOCAL + 'tsp/',
  PHY_AUTHDEVICE_BASEPATH: API.BASEPATH_LOCAL + 'authdev/',
  PHY_BIODEV_BASEPATH: API.BASEPATH_LOCAL + 'biodev/',
  PHY_AUTHDOCS_BASEPATH: API.BASEPATH_LOCAL + 'authdocs/',
  PHY_QR_BASEPATH: API.BASEPATH_LOCAL + 'qr/',
  PHY_EKYC_BASEPATH: API.BASEPATH_LOCAL + 'ekyc/',
  PHY_DEVSEC_BASEPATH: API.BASEPATH_LOCAL + 'devsection/',
  PHY_LOGIN_BASEPATH: API.BASEPATH_LOCAL + 'loginadmin/',
  PHY_FEATUREVIDEO_BASEPATH: API.BASEPATH_LOCAL + 'feature/',


};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
