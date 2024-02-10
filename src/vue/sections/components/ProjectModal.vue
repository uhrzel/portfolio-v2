<template>
  <!-- Gallery Project Modal -->
  <div
    class="modal modal-xl fade"
    :id="UNIQUE_ID"
    tabindex="-1"
    :aria-labelledby="`${UNIQUE_ID}-label`"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <!-- Modal Content -->
      <div class="modal-content">
        <!-- Close Button -->
        <button class="close-button" data-bs-dismiss="modal" aria-label="Close">
          <i class="fa fa-close" />
        </button>

        <!-- Modal Header -->
        <div class="modal-header">
          <h5 class="modal-title">{{ props.modalData.title }}</h5>
        </div>

        <!-- Modal Body -->
        <div class="modal-body">
          <!-- Form for adding a new task -->
          <form @submit.prevent="submitTask">
            <div
              v-for="(field, index) in props.modalData.fields"
              :key="index"
              class="mb-3"
            >
              <label class="form-label">{{ field.label }}</label>
              <!-- Use input type file for image selection -->
              <input
                v-if="field.type !== 'file'"
                v-model="formData[field.model]"
                :type="field.type"
                :placeholder="field.placeholder"
                class="form-control"
              />
              <input
                v-else
                type="file"
                accept="image/*"
                @change="onImageSelected"
                class="form-control"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              {{ props.modalData.actions.submit.label }}
            </button>
            <button type="button" class="btn btn-secondary" @click="closeModal">
              {{ props.modalData.actions.cancel.label }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineExpose, defineEmits } from 'vue';
import { useConstants } from '../../../composables/constants.js';
import Modal from 'bootstrap/js/src/modal';

const props = defineProps({
  modalData: Object,
});

const constants = useConstants();
const UNIQUE_ID = 'project-modal';

const formData = ref({
  imageUrl: '',
  title: '',
  description: '',
});
let bsModal = null;

const openModal = () => {
  if (bsModal) {
    bsModal.show();
  }
};

const closeModal = () => {
  if (bsModal) {
    bsModal.hide();
  }
};
const submitTask = () => {
  const taskData = { ...formData.value };
  // Emit the add-task event w  ith the new task data
  emit('add-task', taskData);
  resetFormData();
  closeModal();
};

const resetFormData = () => {
  // Reset form data to empty values
  formData.value.imageUrl = '';
  formData.value.title = '';
  formData.value.description = '';
};
const onImageSelected = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.value.imageUrl = URL.createObjectURL(file);
  }
};

onMounted(() => {
  const elModal = document.getElementById('project-modal');
  bsModal = new Modal(elModal, {});
});

defineExpose({
  openModal,
  closeModal,
});

const emit = defineEmits(['add-task']);
</script>

<style lang="scss" scoped>
@import '/src/scss/_theming.scss';

.modal-content {
  background-color: $light-1;
}

.close-button {
  position: absolute;
  right: 20px;
  top: 10px;

  z-index: 99;
  padding: 0;
  margin: 0;
  font-size: 1.7rem;

  background-color: transparent;
  border-color: transparent;
  color: $light-4;

  &:hover {
    color: $primary;
  }
}
</style>
