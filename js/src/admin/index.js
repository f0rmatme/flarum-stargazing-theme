import app from 'flarum/app';
import StargazingSettingsModal from "./modals/StargazingSettingsModal";

// initialize settings modal
app.initializers.add('the-turk-stargazing-themedark', app => {
  app.extensionSettings['the-turk-stargazing-themedark'] =
    () => app.modal.show(new StargazingSettingsModal());
});
