import { createApp } from "vue";
import App from "./App.vue";
import "vant/lib/index.css";
import {
  Button,
  Popup,
  Sticky,
  Field,
  Stepper,
  RadioGroup,
  Radio,
  List,
  Cell
} from "vant";

const app = createApp(App);
app.use(Button);
app.use(Popup);
app.use(Sticky);
app.use(Field);
app.use(Stepper);
app.use(RadioGroup);
app.use(Radio);
app.use(List);
app.use(Cell);
app.mount("#app");
