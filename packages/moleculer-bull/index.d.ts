declare module "moleculer-bull" {
  import { ServiceSchema } from "moleculer";
  import { Job, QueueOptions } from "bull";

  type QueueHandler = (job: Job) => Promise<any> | any;

  interface QueueSchema {
    name?: string;
    concurrency?: number;
    process: QueueHandler;
  }

  export interface BullServiceSchema extends ServiceSchema {
    queues?: Record<string, QueueHandler | QueueSchema | QueueSchema[]>;
  }

  const createQueueService: (url: string, queueOpts?: QueueOptions) => BullServiceSchema;

  export default createQueueService;
}
