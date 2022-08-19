const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');


// Database Connection 
const db = require('./config/connection');

const app = express();

