(function() {
	const random = items => items[Math.floor(Math.random() * items.length)];
	const keys = JSON.parse('["43169a2852ce4bb1580df3855c63a78a","25d0e3543e6dbd26d80a3124271e4090","2ba4085f534b23493ee7d5c4b5d1a0fd","1cdcca69cacc7d1f988ddcfbc6e84fe1","fc580744bfc9d0160c84cd6db4d68d21","542109f70c1223a3843031c4fb98f083","570bdb0ee59c31c2790d400f13405007","01fff12a5be7ccef5b4d0aae1352c528","06364cfccd5bb9ce8e304ffb76164d0c","1747a2c8df619ec35084f7159e1d7e2a","83364c50fb5acaf2cc6ed8943b4760f3","857d7f5c2eae50d63cfefcc7b44a7967","754c0cb6e88eb22713df43ef65cccfda","a0662f37473028cf8042a268db34e6b2","b92dcb9e0f9f30056ba8d13a7d636019","842f2819f6ff1dcd0c2d38b80f89ef73","7b9bf214a6d16643580da0cdd4d1faf2","74d1521cc2172194c5a167b52632e144","e22d530f1e97f3b94c4e1bc216d0db56","bba4e1d3b3d31e4b587d100a6fb59c3a","99a6481f1de0e8b727f3c0d868f6c4e8","5b23d0d9009a1e6c73dae98897dfe12b","28a2fb9d7c0ba049f236d4aea998e5fd","433a0cd9190f1e6e4846026839f20eeb","eb0383de8c5e13b2222533b14664391b","a65c27759bd4f211d145050a4e2ceb9a","69770e6e1af2b1bae32577d0106ed48c","fb5c251f4cdf73128d0d1d4700150c4e","2c7462406d39c6f22a9b9a95a1ea7aff","0869b5b48b6d416a1bfdae30f05d74a9","dd3ee4f3092d516666f71236e8b4725c","639847072ce2c6401eb3d062ce3b4078","2239e65eaa0398edcb9a3d412b2dcb9e","42b99dc5ac68ef8ff307f2a7493302bc","00d2aace9da5487f2707638bb370c2a8","de671184bef99dccd25262c2892a91a0","95d75260f789fac9928b24c366eb4528","dde58f6adc71b91bf8fcdcf3fbc176a5"]');
	window.location.href=`/en/${random(keys)}/`;
})();
