import * as TRBase from '../TRBase.js';

const { rules: baseRules, ...rest } = TRBase;

export default {
    ...rest,
    rules: {
        ...baseRules,
        sotd: {
            ...baseRules.sotd,
            pp: [
                ...baseRules.sotd.pp.filter(
                    v =>
                        !['noPP2017', 'jointPublication'].find(
                            x => x === v.data
                        )
                ),
                {
                    data: 'noPP2017',
                    config: {
                        patentPolicy: 'pp2004',
                    },
                    errors: ['sotd.pp.no-pp2017'],
                },
                {
                    data: 'jointPublication',
                    config: {
                        patentPolicy: 'pp2020',
                    },
                    warnings: ['sotd.pp.joint-publication'],
                },
            ],
            'deliverer-note': [
                {
                    data: 'noDelivererNote',
                    errors: ['sotd.deliverer-note.not-found'],
                },
            ],
        },
    },
};