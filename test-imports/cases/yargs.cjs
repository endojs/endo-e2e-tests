
const all = require('yargs');
const def = all.default;
exports.name = 'yargs';
exports.expected = {"*":{"type":"function","keys":["$0","addHelpOpt","addShowHiddenOpt","alias","argv","array","boolean","check","choices","coerce","command","commandDir","commands","completion","config","conflicts","constructor","count","default","defaults","demand","demandCommand","demandOption","deprecateOption","describe","detectLocale","env","epilog","epilogue","example","exit","exitProcess","fail","getAliases","getCompletion","getDemandedCommands","getDemandedOptions","getDeprecatedOptions","getDetectLocale","getExitProcess","getGroups","getHelp","getInternalMethods","getOptions","getStrict","getStrictCommands","getStrictOptions","global","group","help","hide","implies","locale","middleware","nargs","normalize","number","option","options","parse","parseAsync","parseSync","parsed","parserConfiguration","pkgConf","positional","recommendCommands","require","required","requiresArg","scriptName","showCompletionScript","showHelp","showHelpOnFail","showHidden","showVersion","skipValidation","strict","strictCommands","strictOptions","string","terminalWidth","updateLocale","updateStrings","usage","version","wrap"]},"default":{"type":"function","keys":[]}};
exports.actual = { 
    '*': { type: typeof all, keys: Object.keys(all || {}).filter(a=>a).sort() },
    default: { type: typeof def, keys: Object.keys(def || {}).filter(a=>a).sort() }
};
