<template>
  <ckeditor
      v-model="editorData"
      :editor="editor"
      :config="editorConfig"
  ></ckeditor>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue2"
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'

// less Heading + Essentials plugin can't input the text
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'


export default {
  name: "TextEditor",
  components: { ckeditor: CKEditor.component },
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    editorData: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        plugins: [
          Bold,
          Italic,
          Underline,
          Strikethrough,
          Heading,
          Essentials,
        ],

        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'insertImage',
          ],
        },
        language: 'zh',
      },
    }
  }
}
</script>

<style scoped>

</style>