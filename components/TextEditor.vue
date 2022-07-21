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

// Additional features
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';

// image base64 handling
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert'
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting'
import ImageResizeHandles from '@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles'
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter'

import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';

export default {
  name: "TextEditor",
  components: {ckeditor: CKEditor.component},
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
          BlockQuote,
          ImageUpload,
          ImageInsert,
          AutoImage,
          Image,
          ImageResizeEditing,
          ImageResizeHandles,
          Base64UploadAdapter,
          Link,
          List,
          Indent,
          IndentBlock,
          MediaEmbed
        ],

        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'blockQuote',
            '|',
            'bulletedList',
            'numberedList',
            'outdent',
            'indent',
            '|',
            'link',
            'insertImage',
            'mediaEmbed'
          ],
        },
      },
    }
  }
}
</script>

<style scoped>

</style>