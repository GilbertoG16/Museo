import { NativeEventEmitter, NativeModules } from 'react-native';

const eventBus = {
  emitter: new NativeEventEmitter(NativeModules.eventBusModule),

  on(event, callback) {
    this.emitter.addListener(event, callback);
  },

  dispatch(event, data) {
    this.emitter.emit(event, data);
  },

  remove(event, callback) {
    this.emitter.removeListener(event, callback);
  },
};

export default eventBus;
