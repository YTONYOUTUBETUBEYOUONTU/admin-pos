declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.md" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "vue-router";
declare module "vue-router/types/router";
declare module "vue-router/types/route";

declare module "vuex";
declare module "vuex/types/store";
declare module "vuex/types/action";
declare module "vuex/types/mutation";
declare module "vuex/types/getters";
declare module "vuex/types/module";

declare module "vue-pinia";
declare module "pinia/types/store";
declare module "pinia/types/action";
declare module "pinia/types/mutation";
declare module "pinia/types/getters";
declare module "pinia/types/module";

declare module "axios";
declare module "axios/types/adapters/http";
declare module "axios/types/adapters/xhr";
declare module "axios/types/adapters/fetch";
declare module "axios/types/adapters/http";
declare module "axios/types/adapters/https";
declare module "axios/types/adapters/jsonp";
declare module "axios/types/adapters/websocket";
declare module "axios/types/adapters/adapter";
declare module "axios/types/CancelToken";
declare module "axios/types/Cancel";
declare module "axios/types/CancelTokenSource";
declare module "axios/types/AxiosError";
declare module "axios/types/AxiosRequestConfig";
declare module "axios/types/AxiosResponse";
declare module "axios/types/AxiosStatic";

declare module "lodash";
declare module "lodash/types/lodash";
declare module "lodash/types/lodash.array";
declare module "lodash/types/lodash.collection";
declare module "lodash/types/lodash.date";
declare module "lodash/types/lodash.function";
declare module "lodash/types/lodash.lang";
declare module "lodash/types/lodash.math";
declare module "lodash/types/lodash.number";
declare module "lodash/types/lodash.object";
declare module "lodash/types/lodash.string";
declare module "lodash/types/lodash.util";
declare module "lodash/types/lodash.version";

declare module "dayjs";
declare module "dayjs/types/dayjs";
declare module "dayjs/types/plugin/advancedFormat"
declare module "dayjs/types/plugin/customParseFormat"
declare module "dayjs/types/plugin/isoWeek"
declare module "dayjs/types/plugin/isLeapYear"
declare module "dayjs/types/plugin/minMax"
declare module "dayjs/types/plugin/relativeTime"
declare module "dayjs/types/plugin/weekOfYear"
declare module "dayjs/types/plugin/weekday"
declare module "dayjs/types/plugin/zhLocal"

declare module "vue-i18n";
declare module "vue-i18n/types/index";
declare module "vue-i18n/types/vue-i18n";
declare module "vue-i18n/types/vue-i18n.d";

declare module "vue-router-next";
declare module "vue-router-next/types/index";


declare module "vue-debounce";
