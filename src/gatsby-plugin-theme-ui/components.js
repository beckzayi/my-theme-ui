import Prism from '@theme-ui/prism'
import Note from '../components/note'

export default {
  pre: (props) => props.children,
  code: Prism,
  Note,
}
