import { FLASH_MESSAGE, CLEAR_FLASH_MESSAGE } from '@store/flash/mutations';
import Uuid from 'uuid/v4';
export default {
  computed: {
    flashMessages() {
      return this.$store.state.flash.messages
    }
  },
  methods: {
    flash(message, type = 'success') {
        const id = Uuid();
        this.$store.commit(FLASH_MESSAGE, {
            id,
            type,
            message
        })

        setTimeout(() => {
            this.$store.commit(CLEAR_FLASH_MESSAGE, id)
        }, 3000)
    }
  }
};
