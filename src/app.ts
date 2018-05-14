import * as angular from 'angular';
import {LibraryCtrl} from './controllers/libraryCtrl';
import * as LibraryView from './views/libraryView.html';
import './styles/bootstrap.min.css';

"use string";
var libraryApp=angular.module('libraryApp',[])
.controller('LibraryCtrl',LibraryCtrl);