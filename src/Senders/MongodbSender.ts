/**
 * @fileOverview MongoDB Sender class.
 */
import {Mongo} from "meteor/mongo";
import {ISendContext, TS_KEY} from "../ISendContext";
import Logger from "../Logger";
import ServerLogger from "../ServerLogger";
import SenderBase from "./SenderBase";

/**
 * MongodbSender sends logs to the Meteor standard database.
 *
 * @extends SenderBase
 */
const MongodbSender = class extends SenderBase {
  public store: Mongo.Collection<object>;

  // noinspection JSClassNamingConvention
  /**
   * @constructor
   *
   * @param {Mongo} mongo
   *   The Meteor Mongo service.
   * @param {(String|Collection)} collection
   *   The collection or the name of the collection in which to log.
   */
  constructor(mongo: typeof Mongo, collection: string|Mongo.Collection<object> = "logger") {
    super();
    if (collection instanceof mongo.Collection) {
      this.store = collection;
    } else if (typeof collection === "string") {
      const collectionName = collection;
      this.store = new mongo.Collection(collectionName);
    } else {
      throw new Error("MongodbSender requires a Collection or a collection name");
    }
  }

  /** @inheritDoc */
  public send(level: number, message: string, context: object): void {
    const defaultedContext: ISendContext = { ...context, timestamp: {} };
    const doc = { level, message, context: {} as ISendContext };

    // It should contain a timestamp.{side} object if it comes from any Logger.
    if (typeof defaultedContext[TS_KEY] === "undefined") {
      defaultedContext[TS_KEY] = {
        server: {},
      };
    }
    doc.context = defaultedContext;

    // doc.context.timestamp.server is known to exist from above.
    Logger.prototype.stamp.call({ side: ServerLogger.side }, doc.context, "send");
    this.store.insert(doc);
  }
};

export default MongodbSender;
