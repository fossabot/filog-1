"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var IContext_1 = require("../IContext");
exports.KEY_DETAILS = IContext_1.KEY_DETAILS;
exports.KEY_HOST = IContext_1.KEY_HOST;
exports.KEY_SOURCE = IContext_1.KEY_SOURCE;
exports.KEY_TS = IContext_1.KEY_TS;
var InvalidArgumentException_1 = __importDefault(require("../InvalidArgumentException"));
exports.InvalidArgumentException = InvalidArgumentException_1.default;
var LogLevel = __importStar(require("../LogLevel"));
exports.LogLevel = LogLevel;
var ClientLogger_1 = require("./ClientLogger");
exports.ClientLogger = ClientLogger_1.ClientLogger;
var Logger_1 = require("./Logger");
exports.Logger = Logger_1.Logger;
var ServerLogger_1 = require("./ServerLogger");
exports.ServerLogger = ServerLogger_1.ServerLogger;
var BrowserProcessor_1 = require("../Processors/BrowserProcessor");
exports.BrowserProcessor = BrowserProcessor_1.BrowserProcessor;
var MeteorUserProcessor_1 = require("../Processors/MeteorUserProcessor");
exports.MeteorUserProcessor = MeteorUserProcessor_1.MeteorUserProcessor;
var ProcessorBase_1 = require("../Processors/ProcessorBase");
exports.ProcessorBase = ProcessorBase_1.ProcessorBase;
var RoutingProcessor_1 = require("../Processors/RoutingProcessor");
exports.RoutingProcessor = RoutingProcessor_1.RoutingProcessor;
var LeveledStrategy_1 = require("../Strategies/LeveledStrategy");
exports.LeveledStrategy = LeveledStrategy_1.LeveledStrategy;
var StrategyBase_1 = require("../Strategies/StrategyBase");
exports.StrategyBase = StrategyBase_1.StrategyBase;
var TrivialStrategy_1 = require("../Strategies/TrivialStrategy");
exports.TrivialStrategy = TrivialStrategy_1.TrivialStrategy;
var ConsoleSender_1 = require("../Senders/ConsoleSender");
exports.ConsoleSender = ConsoleSender_1.ConsoleSender;
var MeteorClientHttpSender_1 = require("../Senders/MeteorClientHttpSender");
exports.MeteorClientHttpSender = MeteorClientHttpSender_1.MeteorClientHttpSender;
var MeteorClientMethodSender_1 = require("../Senders/MeteorClientMethodSender");
exports.MeteorClientMethodSender = MeteorClientMethodSender_1.MeteorClientMethodSender;
var MongodbSender_1 = require("../Senders/MongodbSender");
exports.MongodbSender = MongodbSender_1.MongodbSender;
var NullSender_1 = require("../Senders/NullSender");
exports.NullSender = NullSender_1.NullSender;
var TeeSender_1 = require("../Senders/TeeSender");
exports.TeeSender = TeeSender_1.TeeSender;
/* modern-syslog is not usable on the client side, because it fails to load
 * its compiled binary dependency, hence the dynamic require and tslint disable.
 *
 * @type {NullSender|SyslogSender}
 */
var SyslogSender = Meteor.isServer
    // tslint:disable-next-line
    ? require("../Senders/SyslogSender").SyslogSender
    : NullSender_1.NullSender;
exports.SyslogSender = SyslogSender;
//# sourceMappingURL=index.js.map