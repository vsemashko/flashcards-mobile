import Reactotron, {asyncStorage, networking, openInEditor, overlay, trackGlobalErrors} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
    .configure({
        name: 'Flashcards Mobile'
    })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .use(reactotronRedux())
    .connect();