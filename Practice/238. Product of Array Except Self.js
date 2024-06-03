const nums = [1,2,3,4];

const bruteForce=(nums)=>{
    let ans = [];
    for(let i=0; i<nums.length; i++){
        let product=1;
        for(let j=0;j<nums.length; j++){
            if(i==j)continue;
            product*=nums[j]
        }
        ans[i]=product;
    }
    return ans;
}

const betterSolution = (nums)=>{
    //Expection when 0 is there in an array
    let product=1;
    const array=structuredClone(nums); // deep copy of array
    for (const item of nums){
        product*=item;
    }
    for(const key in nums)array[key]=product/array[key];
    return array;
}

const optimalOneSolution = (nums)=>{
    let prefix=new Array();
    let suffix=new Array();
    let ans=new Array();
    prefix[0]=1;
    suffix[nums.length-1]=1;
    let product=1;
    for(let i=1;i<nums.length;i++){
        product=prefix[i-1]*nums[i-1];
        prefix[i]=product;   
    }
    product=1;
    for(let i=nums.length-2;i>=0;i--){
        product=suffix[i+1]*nums[i+1];
        suffix[i]=product;
    }
    for(const index in nums){
        ans[index]=suffix[index]*prefix[index];
    }
    return ans;
}

const optimalTwoSolution = (nums)=>{
    let ans=new Array(nums.length).fill(1);
    let product=1;
    for(let i=0;i<nums.length;i++){
        ans[i]*=product;   
        product*=nums[i];
    }
    product=1;
    for(let i=nums.length-1;i>=0;i--){
        ans[i]*=product;
        product*=nums[i];
    }
            return ans;
}

console.log(optimalTwoSolution(nums));