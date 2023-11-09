class Warrior {
    experienceStore = 100;
    experience() {
        if (this.experienceStore <= 10000) return this.experienceStore;
        if (this.experienceStore > 10000) return 10000;
    }
    level() {
        if ((Math.floor(this.experience() / 100)) <= 100) return Math.floor(this.experience() / 100);
        if ((Math.floor(this.experience() / 100)) > 100) return 100;
    }
    defineRank(arg){
        if (arg < 10) return "Pushover";
        if (arg > 9 && arg < 20) return "Novice";
        if (arg > 19 && arg < 30) return "Fighter";
        if (arg > 29 && arg < 40) return "Warrior";
        if (arg > 39 && arg < 50) return "Veteran";
        if (arg > 49 && arg < 60) return "Sage";
        if (arg > 59 && arg < 70) return "Elite";
        if (arg > 69 && arg < 80) return "Conqueror";
        if (arg > 79 && arg < 90) return "Champion";
        if (arg > 89 && arg < 100) return "Master";
        if (arg === 100) return "Greatest";
    }
    rank() {
        return this.defineRank(this.level());
    }
    achievementsStore = [];
    achievements() {
        return this.achievementsStore;
    }
    training(arg){
        if (arg[2] <= this.level()) {
            this.experienceStore += arg[1];
            this.achievementsStore.push(arg[0]);
            return arg[0];
        } else {
            return "Not strong enough";
        }
    }
    battle(lvl){
        if (lvl < 1 || lvl > 100) return "Invalid level";
        if (lvl === this.level()) { // equal lvl
            this.experienceStore += 10;
            return "A good fight";
        }
        if (lvl + 1 === this.level()) { // 1 lvl lower
            this.experienceStore += 5;
            return "A good fight";
        }
        if (lvl + 1 < this.level()) { // 2 and more lvl lower
            this.experienceStore += 0;
            return "Easy fight";
        }
        if (lvl - 5 >= this.level() && this.rank() !== this.defineRank(lvl)) return "You've been defeated" // 5 lvl more and 1 rank more
        else {
            let diff = lvl - this.level(); // some lvl more
            this.experienceStore += 20 * diff * diff;
            return "An intense fight";
        }
    }
}

