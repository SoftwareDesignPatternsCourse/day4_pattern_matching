// Enum representing the types of running statistics
enum RunningStatType {
    MEAN,
    MIN,
    MAX,
    COUNT,
  }
  
  // Model class representing a running statistic
  class RunningStat {
    private type: RunningStatType;
    private value: number;
  
    constructor(type: RunningStatType, value: number) {
      this.type = type;
      this.value = value;
    }
  
    getType(): RunningStatType {
      return this.type;
    }
  
    getValue(): number {
      return this.value;
    }
  }
  
  // Model class representing a collection of running statistics
  class RunningStats {
    private stats: RunningStat[];
  
    constructor() {
      this.stats = [];
    }
  
    addStat(stat: RunningStat): void {
      this.stats.push(stat);
    }
  
    printStats(): void {
      for (const stat of this.stats) {
        console.log(`${stat.getType()}: ${stat.getValue()}`);
      }
    }
  }
  
  // Example usage
  const runningStats = new RunningStats();
  
  const meanStat = new RunningStat(RunningStatType.MEAN, 8.5);
  const minStat = new RunningStat(RunningStatType.MIN, 5.2);
  const maxStat = new RunningStat(RunningStatType.MAX, 12.9);
  const countStat = new RunningStat(RunningStatType.COUNT, 100);
  
  runningStats.addStat(meanStat);
  runningStats.addStat(minStat);
  runningStats.addStat(maxStat);
  runningStats.addStat(countStat);
  
  runningStats.printStats();
  