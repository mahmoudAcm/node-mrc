import express from 'express';
import cors from 'cors';
import { NextHandleFunction } from 'connect';

export default [cors(), express.json()] as NextHandleFunction[];