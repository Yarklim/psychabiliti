import '../../scss/main.scss';
import { createNavigation } from './components/admin-nav';

const app = document.querySelector('#app');

app.append(createNavigation());
