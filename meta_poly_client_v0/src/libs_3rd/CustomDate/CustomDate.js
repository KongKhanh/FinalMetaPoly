// @Auth VoVanHau
// Built at: 17h:10' 17/11/2021

// ccd: calculate date
// Parameters: dtd->data_date, 
export function ccd(dtd) {

    // cd: current date
    this.cd = new Date();

    // sd: some date
    this.sd = new Date();
    this.dtd = dtd;

    // mnd: mining dataset
    this.mnd = function() {

        if(this.dtd) {

            if(typeof this.dtd === 'string' || this.dtd instanceof String) {

                var rf = []; // result reference
        
                var ds = this.dtd.split(' '); // data split
        
                var dsf = ds[0].split('-'); // data split first
                var dss = ds[1].split(':'); // data split second
        
        
                dsf.map((fi) => { // first item
                    rf.push(fi);
                });
        
                dss.map((si) => { // second item
                    rf.push(si);
                });
        
                return rf && Array.isArray(rf) ? rf : [];
                
            } else {
                return undefined;
            }
        } else {
            return undefined;
        }
    }

    // sccd: start calculate date
    this.sccd = function() {

        if(this.mnd() !== undefined) {

            this.sd.setFullYear(this.mnd()[0]);

            this.sd.setMonth(this.mnd()[1] - 1);

            this.sd.setDate(this.mnd()[2]);

            this.sd.setHours(this.mnd()[3]);

            this.sd.setMinutes(this.mnd()[4]);

            this.sd.setSeconds(this.mnd()[5]);

            // ss: subseconds
            var ss = parseInt(this.cd.getTime() - this.sd.getTime()) / 1000; // the number of seconds 
            
            var rst_o = { // rst_o: result time object
                t: 0,
                f: 'seconds',
            };

            // return ss;

            if(ss < 60) { // ( show number of seconds )
                rst_o = {
                    ...rst_o,
                    t: ss,
                    f: 'seconds',
                }
            }
            if(ss >= 60 && ss < 3600) { // (show number of minutes )
                rst_o = {
                    ...rst_o,
                    t: (ss/60),
                    f: 'minutes',
                }
            }
            if(ss > 3600 && ss < 86400) { // ( show number of hours )
                rst_o = {
                    ...rst_o,
                    t: (ss/60)/60,
                    f: 'hours',
                }
            }
            if(ss > 86400 && ss < 2592000) { // ( show number of days )
                rst_o = {
                    ...rst_o,
                    t: (ss/60)/60/24,
                    f: 'days',
                }
            }
            if(ss > 2592000 && ss < 31104000) { // ( show number of months )
                rst_o = {
                    ...rst_o,
                    t: (ss/60)/60/24/30,
                    f: 'months',
                }
            }
            if(ss > 31104000) { // ( show number of years )
                rst_o = {
                    ...rst_o,
                    t: (parseInt(this.cd.getFullYear() - this.sd.getFullYear())),
                    f: 'years',
                }
            }    
    
            rst_o.t = Math.floor(rst_o.t);

            return rst_o;

        } else {
            return undefined;
        }
    }

}

// gs: get result
ccd.prototype.gs = function() {
   return this.sccd();
}

// const ccd_obj = new ccd('2019-1-10 22:24:25');

// const myr = ccd_obj.gs();



