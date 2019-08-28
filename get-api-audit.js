'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class ApiLoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'get-api-audit',
            description: 'Schedule API initialized and ready',
            failureDescription: 'Schedule API slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule API is shown.',

            requiredArtifacts: ['TimeToApi']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToApi;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = ApiLoadAudit;