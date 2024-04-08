'use strict';

/**
 * prima service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prima.prima');
