var minWindow = function(s, t) {
    if(t===""){
        return "";
    }

    let countT={}, window = {};

    for(let c of t){
        countT[c] = (countT[c] || 0) + 1;
    }

    let have = 0,need = Object.keys(countT).length;
    let res = [-1,-1],resLen = Infinity,l=0;

    for(let r=0;r<s.length;r++) {
        let c = s[r];
        window[c] = (window[c] || 0) + 1;
        
        if(Object.keys(countT).includes(c) && window[c] === countT[c]) {
            have+=1;
        }

        while(have === need){
            //update our result
            if((r-l+1) < resLen){
                res = [l,r];
                resLen = (r-l+1);
            }
            //pop up from the left
            window[s[l]] -=1;
            if(Object.keys(countT).includes(s[l]) && window[s[l]] < countT[s[l]]){
                have -=1
            }
            l+=1
        }
    }
    l = res[0];
    r = res[1];

    if(resLen !== Infinity){
        return s.slice(l,r+1)
    }else{
        return ""
    }
}