//function historicalDevelopmentSE() {

  var dataSE_PB = {'con':{}};

  dataSE_PB.con.excelLineArray = new Array(100, 99.67062369, 100.6474965, 101.8598464, 101.7536812, 101.5858711, 101.8592701, 102.526462, 103.9766324, 103.4893601, 103.7819261, 102.6939258, 102.7121197, 104.8173985, 103.8796467, 103.2420232, 104.6099623, 105.6769816, 105.1920428, 105.2028886, 104.3520815, 102.3386188, 103.921541, 105.9205202, 105.9439197, 105.9071558, 105.8760649, 106.6950555, 106.3027882, 105.4192932, 103.2245946, 101.9453419, 102.3663457, 100.3689234, 101.8986084, 104.1078575, 103.1045644, 102.8698457, 102.9181173, 102.8328607, 105.1769018, 106.3350689, 107.8147997, 108.6058894, 109.8193447, 109.4202556, 110.9499648, 110.9384539, 112.0150833, 113.6917129, 114.9239963, 115.7094312, 114.8954216, 114.3908168, 115.3532447, 115.6279918, 116.169666, 116.6354174, 117.1820265, 117.9231093, 118.9827129, 120.1630482, 120.8686891, 120.8764049, 121.1830427, 123.3377189, 125.6316647, 126.6074622, 126.7096487, 128.0351969, 127.5375308, 129.0927898, 130.0784985, 130.4476536, 131.861804, 132.0376005, 131.6999865, 129.9649614, 129.9459097, 130.7556767, 132.2752607, 133.604184, 134.7831352, 134.8557931, 135.8076732, 136.673153, 137.3685102, 138.2858963, 138.9671134, 140.4540421, 139.9382442, 139.4843316, 140.3254895, 140.5622359, 141.5522668, 140.4476288, 140.5196446, 138.5314861, 138.2532483, 136.9582354, 139.3463704, 139.7560827, 136.6973861, 136.8445985, 138.3934829, 135.308194, 130.5766554, 130.6476048, 133.2104759, 132.2235058, 132.1024275, 132.365749, 136.8862382, 138.5523915, 140.0527778, 142.7741683, 143.761626, 145.5102134, 146.133181, 147.3819801, 148.6617348, 149.0780512, 148.9376207, 151.9120541, 153.2618709, 152.4154499, 152.1176012, 153.1861723, 153.8794359, 154.4807981, 155.1032878, 155.3829794, 156.094993, 155.398544, 155.9508341, 156.3093305, 157.1858552, 158.2610666, 158.0869184, 158.5010665, 156.2540542, 155.5704876, 158.0186393, 157.9968983, 159.5022068, 162.035341, 163.3868338, 163.6815981, 164.3982577, 164.2795917, 164.3384629, 165.8934463, 166.0056475, 167.2567471, 167.6258278, 168.6713655, 169.153488, 169.4314021, 170.4531914, 171.635535, 173.3927283, 173.4261241, 171.2658875, 172.7567061, 172.0017098, 173.3494319, 175.7363939, 176.7438465, 176.5842768, 176.7919169, 178.5035724, 179.4500153, 180.6997143, 183.2383383, 184.0941216, 184.9281165, 186.8902099, 186.4120204, 188.3249307, 189.6106473);
  dataSE_PB.con.maxLoss = -7.8;

  //return SE;

  /*
  if (country == "SE") {
    var data = {};
    if (graphType == "con") {
      data.excelLineArray = new Array(100, 99.67062369, 100.6474965, 101.8598464, 101.7536812, 101.5858711, 101.8592701, 102.526462, 103.9766324, 103.4893601, 103.7819261, 102.6939258, 102.7121197, 104.8173985, 103.8796467, 103.2420232, 104.6099623, 105.6769816, 105.1920428, 105.2028886, 104.3520815, 102.3386188, 103.921541, 105.9205202, 105.9439197, 105.9071558, 105.8760649, 106.6950555, 106.3027882, 105.4192932, 103.2245946, 101.9453419, 102.3663457, 100.3689234, 101.8986084, 104.1078575, 103.1045644, 102.8698457, 102.9181173, 102.8328607, 105.1769018, 106.3350689, 107.8147997, 108.6058894, 109.8193447, 109.4202556, 110.9499648, 110.9384539, 112.0150833, 113.6917129, 114.9239963, 115.7094312, 114.8954216, 114.3908168, 115.3532447, 115.6279918, 116.169666, 116.6354174, 117.1820265, 117.9231093, 118.9827129, 120.1630482, 120.8686891, 120.8764049, 121.1830427, 123.3377189, 125.6316647, 126.6074622, 126.7096487, 128.0351969, 127.5375308, 129.0927898, 130.0784985, 130.4476536, 131.861804, 132.0376005, 131.6999865, 129.9649614, 129.9459097, 130.7556767, 132.2752607, 133.604184, 134.7831352, 134.8557931, 135.8076732, 136.673153, 137.3685102, 138.2858963, 138.9671134, 140.4540421, 139.9382442, 139.4843316, 140.3254895, 140.5622359, 141.5522668, 140.4476288, 140.5196446, 138.5314861, 138.2532483, 136.9582354, 139.3463704, 139.7560827, 136.6973861, 136.8445985, 138.3934829, 135.308194, 130.5766554, 130.6476048, 133.2104759, 132.2235058, 132.1024275, 132.365749, 136.8862382, 138.5523915, 140.0527778, 142.7741683, 143.761626, 145.5102134, 146.133181, 147.3819801, 148.6617348, 149.0780512, 148.9376207, 151.9120541, 153.2618709, 152.4154499, 152.1176012, 153.1861723, 153.8794359, 154.4807981, 155.1032878, 155.3829794, 156.094993, 155.398544, 155.9508341, 156.3093305, 157.1858552, 158.2610666, 158.0869184, 158.5010665, 156.2540542, 155.5704876, 158.0186393, 157.9968983, 159.5022068, 162.035341, 163.3868338, 163.6815981, 164.3982577, 164.2795917, 164.3384629, 165.8934463, 166.0056475, 167.2567471, 167.6258278, 168.6713655, 169.153488, 169.4314021, 170.4531914, 171.635535, 173.3927283, 173.4261241, 171.2658875, 172.7567061, 172.0017098, 173.3494319, 175.7363939, 176.7438465, 176.5842768, 176.7919169, 178.5035724, 179.4500153, 180.6997143, 183.2383383, 184.0941216, 184.9281165, 186.8902099, 186.4120204, 188.3249307, 189.6106473);
      data.maxLoss = -7.8;
      data.maxLossPositionMonth = 10;
      data.maxLossPositionYear = 2007;
      data.maxReturn = 14.8;
      data.maxReturnPositionMonth = 3;
      data.maxReturnPositionYear = 2009;
    }

    if (graphType == "mod") {
      data.excelLineArray = new Array(100, 99.34384305, 100.7348181, 102.4201223, 102.0535325, 101.5322837, 101.6916022, 102.5455273, 104.668546, 103.551834, 103.8224636, 101.6801256, 101.2411927, 104.2820169, 102.3536856, 100.9409435, 103.2753932, 104.7867629, 103.8120861, 103.3088361, 101.4872552, 97.96147899, 100.1006143, 103.2213804, 103.1944577, 102.8771181, 102.6128251, 103.851245, 102.8161131, 101.0319934, 97.20904504, 94.92200513, 95.17294017, 91.51643543, 93.85475721, 96.91856415, 94.74482767, 94.03232483, 93.73767598, 93.40408835, 96.71012247, 97.99893884, 100.1238623, 101.5209729, 103.3301727, 102.1718247, 104.6537524, 104.4633662, 105.8434877, 108.2859972, 109.9925292, 110.8873586, 109.706188, 108.8278364, 110.2317514, 110.3656163, 110.8770614, 111.4111965, 112.0106522, 113.0123915, 114.4740279, 116.1447203, 117.2329463, 117.2002924, 117.3805088, 120.644889, 124.1098712, 125.7415999, 125.6633011, 127.9459153, 127.1710306, 129.7393228, 131.2648503, 131.8366372, 134.0733012, 134.4719303, 133.8214154, 130.571175, 130.4615313, 131.4658315, 133.7248813, 135.7586812, 137.5481322, 137.3033726, 138.9427056, 140.3170383, 141.0202039, 142.4806228, 143.4743818, 146.0001948, 145.0392122, 143.9600957, 145.0173434, 145.089688, 146.4862818, 144.1786521, 144.070031, 139.8909783, 139.2343221, 136.7948939, 140.473909, 141.1133471, 135.7081984, 135.4978811, 137.6778336, 132.6403226, 124.7935241, 124.406038, 127.5412777, 125.7444745, 125.4232846, 125.7762495, 132.7881647, 135.3344021, 137.3409948, 141.3122668, 142.7540047, 145.3287551, 146.2268782, 148.1736993, 150.3599958, 150.7443281, 150.3321698, 155.3148744, 157.3406903, 155.7374599, 155.0053008, 156.6255593, 157.2144963, 158.2961139, 159.506501, 160.1675254, 161.576331, 160.246862, 160.9839302, 161.4417433, 162.6284428, 163.9793315, 163.5493622, 163.6405386, 159.3059978, 157.9024747, 161.8480231, 161.836048, 163.9521558, 168.1180661, 170.2775033, 170.7183358, 171.6097315, 170.9045854, 170.978622, 173.1128322, 173.0965882, 175.1139519, 175.5927286, 177.2838269, 177.9849902, 178.8077732, 180.4256991, 182.3356717, 185.054715, 185.495679, 182.0450044, 184.5181675, 183.3191032, 185.5420538, 189.4749105, 191.2276607, 191.0004007, 190.8601572, 193.8019703, 195.3632812, 197.3505602, 201.717271, 203.112948, 204.4797344, 207.7468706, 207.0241784, 210.2431617, 212.5847159);
      data.maxLoss = -14.8;
      data.maxLossPositionMonth = 10;
      data.maxLossPositionYear = 2007;
      data.maxReturn = 23.5;
      data.maxReturnPositionMonth = 3;
      data.maxReturnPositionYear = 2009;
    }

    if (graphType == "bal") {
      data.excelLineArray = new Array(100, 99.13274245, 100.9166331, 102.8514296, 102.2933751, 101.2722886, 101.0989597, 102.1241352, 105.0568146, 102.9451176, 103.146522, 99.34755898, 97.92998242, 101.8455686, 98.62600191, 96.11242495, 99.95787074, 102.107622, 100.5209812, 98.9352062, 95.72443497, 90.51794462, 92.81458275, 97.38093699, 97.63137483, 96.94361348, 96.39371721, 98.44936153, 96.46619807, 93.55895596, 87.71801318, 84.19088822, 83.98215826, 78.32297696, 81.60623327, 85.34585761, 81.50914608, 80.21141223, 79.35457034, 78.90491637, 82.92165406, 83.70848766, 86.45083078, 88.90536065, 91.3342067, 88.91019685, 92.70106421, 92.31362587, 93.68417283, 96.74002084, 98.56750697, 99.24466432, 98.26687889, 97.09895137, 98.91169673, 98.65197682, 98.73079363, 99.2061059, 99.64939932, 100.7759392, 102.3954949, 104.2369026, 105.8327503, 105.7936974, 105.4017744, 109.48925, 113.7817683, 116.2937329, 115.7682359, 119.2779795, 118.5783481, 122.285731, 124.2525873, 125.2012283, 128.2300951, 129.3684217, 128.5821145, 123.561156, 123.5187179, 124.3711992, 127.1150543, 129.7715909, 132.1869611, 131.3073671, 134.1371668, 136.3211903, 136.5118302, 138.8470568, 140.320482, 144.4915746, 143.2997207, 141.2472842, 142.3384996, 142.2273464, 143.8867521, 139.9938391, 139.8810447, 132.4496864, 131.4319816, 128.0076037, 133.1737679, 134.6153399, 126.917655, 125.9992533, 128.5775154, 122.1842811, 111.3903748, 109.5944653, 112.2523218, 110.1848134, 109.5685101, 110.1651256, 119.2520112, 122.6326121, 124.4108955, 128.8277302, 130.3744599, 133.4011795, 134.3088168, 136.583176, 139.861305, 139.6903466, 138.7117355, 145.5725882, 147.7435701, 144.9999671, 143.5933496, 145.5256359, 144.8362046, 146.736643, 148.8756487, 150.2971661, 153.0073598, 151.1258425, 151.8583526, 152.455472, 153.5047477, 154.424513, 153.8517558, 152.6455574, 145.6617565, 143.1399758, 148.4879911, 148.5594785, 150.5586905, 155.9295704, 158.8769577, 159.6081259, 160.1713637, 157.9900159, 158.5934472, 160.3753515, 160.0666313, 162.7331845, 163.1230439, 165.3142339, 166.2283848, 168.4956176, 170.3892465, 172.7137918, 175.693726, 177.4968686, 173.7144608, 176.9343341, 175.8189506, 178.6958954, 183.6922981, 186.1509176, 186.3740443, 184.8608737, 188.9338095, 190.8999829, 193.1360259, 198.8718603, 200.5997274, 202.2683511, 206.001634, 205.3284904, 209.1782757, 212.2363991);
      data.maxLoss = -22.6;
      data.maxLossPositionMonth = 10;
      data.maxLossPositionYear = 2007;
      data.maxReturn = 32.1;
      data.maxReturnPositionMonth = 3;
      data.maxReturnPositionYear = 2009;
    }

    if (graphType == "gro") {
      data.excelLineArray = new Array(100, 98.75878077, 101.0183991, 103.5461439, 102.6386389, 101.187886, 100.5872462, 101.7515259, 105.5791757, 102.3931359, 102.7158673, 97.32210886, 94.87826254, 99.58624425, 94.76915741, 91.14303066, 96.61770081, 99.28192444, 97.11771042, 94.43809321, 89.8278481, 83.08410039, 85.70045543, 91.54626072, 91.95740954, 90.85132255, 89.99817668, 92.6276063, 89.61646871, 85.61065332, 78.1067876, 73.73557596, 73.17941216, 65.76008593, 69.82988327, 73.96144241, 68.73589595, 66.87050835, 65.57120543, 64.89197244, 69.25729636, 69.82685634, 72.92907183, 76.16591635, 79.02558843, 75.55497401, 80.2271254, 79.62788721, 81.03674017, 84.61970566, 86.7208738, 87.25482121, 86.29688166, 84.93856783, 87.05899707, 86.41359032, 86.12595885, 86.53530385, 86.84041996, 88.12259017, 89.91730968, 92.0156919, 93.98472674, 94.08800909, 93.37273179, 98.22525649, 103.3889037, 106.6560348, 105.7294121, 110.4170625, 109.6860478, 114.5227888, 116.9746724, 118.2034627, 122.0742116, 123.8440003, 122.7940071, 115.8224366, 115.8176424, 116.5662638, 119.8872012, 123.2370583, 126.2756496, 124.7424735, 128.6327488, 131.5526872, 131.3203418, 134.5330344, 136.4459211, 142.3084788, 140.8708593, 138.0743897, 139.2326912, 138.7319204, 140.7402549, 135.2391535, 134.9880736, 124.2696842, 122.950279, 118.3908725, 124.8140676, 126.8341901, 116.6524943, 115.2265841, 118.2563536, 110.6898067, 97.97501154, 95.65661584, 98.01198519, 94.9401327, 94.30773318, 94.89025001, 105.2988465, 109.0109674, 110.6468162, 115.4132755, 117.0524056, 120.2014191, 121.1171553, 123.8453953, 127.8896656, 127.1977276, 125.7108301, 134.263623, 136.6546606, 133.081495, 130.9120592, 132.9960344, 131.4120616, 133.8198181, 136.565086, 138.7361683, 142.472664, 139.7928979, 140.5036324, 141.2236508, 142.2487572, 142.9322261, 142.2325313, 139.9599607, 130.7780907, 127.6254866, 133.8751575, 134.1846072, 136.126858, 142.6055132, 146.1194249, 147.0640668, 147.4035507, 144.1778128, 144.8572183, 146.3853731, 145.7122315, 148.9488661, 149.2182278, 151.8864069, 152.8645185, 156.2175994, 158.48635, 161.3497886, 164.7548643, 167.747996, 163.5111327, 167.5294951, 166.3470451, 169.9344797, 176.1297914, 179.4726889, 179.8944974, 177.2219728, 182.4401425, 184.9337881, 187.6330557, 195.0756148, 197.2304311, 199.4864336, 204.1534812, 203.5853513, 208.5058814, 212.8165023);
      data.maxLoss = -30.4;
      data.maxLossPositionMonth = 10;
      data.maxLossPositionYear = 2007;
      data.maxReturn = 41.5;
      data.maxReturnPositionMonth = 3;
      data.maxReturnPositionYear = 2009;
    }

    if (graphType == "rf") {
      data.excelLineArray = new Array(100, 98.52842637, 101.062377, 104.007386, 102.8483733, 101.1650664, 100.1021192, 101.2826286, 105.6946252, 101.6742987, 102.2009118, 95.68408383, 92.31414622, 97.28046878, 91.22429304, 86.82585896, 93.57655111, 96.51466503, 94.02607164, 90.40149993, 84.81314023, 77.30495403, 79.96381702, 86.55771992, 87.17610768, 85.76068921, 84.70545305, 87.69716436, 83.90135168, 79.21235614, 70.85989896, 66.15348719, 65.31434254, 56.85616484, 61.35801694, 65.46394648, 59.37388032, 57.15015565, 55.56742845, 54.76241581, 59.01224271, 59.31790549, 62.44994989, 66.15617176, 69.13696867, 64.99399349, 70.04088254, 69.31483903, 70.60367768, 74.30930071, 76.44605692, 76.77316234, 76.02460374, 74.68690326, 76.87340802, 75.90031728, 75.25155852, 75.55206347, 75.68463398, 76.98307892, 78.7320467, 80.82395149, 82.94175129, 83.23394846, 82.28167412, 87.274992, 92.6469673, 96.28375992, 95.05034309, 100.3700492, 99.77333027, 105.1572105, 107.7742973, 109.1525934, 113.3762855, 115.6634472, 114.5269495, 106.458439, 106.5520858, 107.0592019, 110.5133655, 114.136886, 117.4211445, 115.3955202, 119.9295784, 123.2729775, 122.5811424, 126.3571231, 128.5129572, 135.4706844, 134.1081658, 131.0116641, 132.0842109, 131.2329008, 133.3347925, 126.9619765, 126.6680943, 113.9246236, 112.5487983, 107.5196853, 114.4017131, 116.8544676, 105.5725486, 103.8618408, 106.9732354, 99.45220417, 86.74740537, 84.22014129, 85.96314856, 82.20806808, 81.69157906, 82.18721356, 92.55575262, 96.04759706, 97.2458848, 101.6160397, 103.0706744, 105.791652, 106.5431688, 109.3114552, 113.5112959, 112.3118791, 110.4939863, 119.4373797, 121.6106545, 117.7578789, 115.0915943, 116.9419243, 114.5940124, 117.1405524, 120.0476202, 122.7051837, 126.9505045, 123.859734, 124.4186994, 125.1895135, 125.995888, 126.2853496, 125.6354805, 122.5595641, 112.6900994, 109.4584813, 115.5645303, 116.1195442, 117.6206501, 124.0921817, 127.5766662, 128.6145058, 128.6345053, 124.8698395, 125.5336656, 126.4472913, 125.5006157, 128.7509122, 128.8260298, 131.5046974, 132.3665687, 136.3100025, 138.5402618, 141.4316362, 144.5934759, 148.399676, 144.6362231, 148.735454, 147.7810429, 151.4376447, 157.6959312, 161.3837645, 161.9990044, 158.4919381, 163.9090671, 166.4763947, 169.10921, 176.8832912, 179.052042, 181.5284382, 186.179137, 185.9266094, 190.9511384, 195.7641366);
      data.maxLoss = -37.6;
      data.maxLossPositionMonth = 3;
      data.maxLossPositionYear = 2002;
      data.maxReturn = 45.3;
      data.maxReturnPositionMonth = 3;
      data.maxReturnPositionYear = 2009;
    }

    if (graphType == "eo") {
      data.excelLineArray = new Array(100, 97.14771677, 99.73178765, 106.4565926, 107.0346921, 106.5404286, 105.6583683, 107.9835154, 114.5784786, 113.6068966, 116.548116, 110.2183425, 107.4623481, 114.6408175, 106.0530084, 101.4478191, 106.4284945, 110.8789837, 108.2031929, 103.8523135, 95.68254584, 85.66964164, 88.74740259, 94.62340493, 96.51963485, 96.86531936, 97.10847508, 100.5615178, 94.2699669, 91.2327728, 82.78877158, 75.90120801, 76.47214401, 66.86195717, 71.26139663, 74.67314, 68.30752842, 64.83178611, 62.70483529, 62.3929647, 66.89750558, 67.40586026, 70.52832651, 73.26518538, 78.60809863, 75.1885271, 80.55000039, 78.36028045, 79.13872274, 82.86999606, 85.32231902, 84.14271589, 83.63812252, 82.52776385, 84.82581611, 83.37544669, 83.63782061, 84.89851287, 83.88424128, 85.58721678, 86.93663495, 88.91439263, 91.8694873, 91.83959205, 90.07414261, 96.15322159, 99.66966826, 103.1830829, 103.310485, 107.7583832, 104.8647318, 110.1608433, 114.2859996, 115.8808014, 117.5259533, 118.2868646, 117.9392093, 110.7225794, 110.9457061, 111.5605121, 115.0392204, 118.3222715, 121.8949924, 121.9345639, 125.8982658, 129.5878718, 126.765644, 128.6747544, 131.761855, 137.3951563, 135.9633944, 134.9269991, 135.0978785, 136.5828929, 139.5107347, 130.8101745, 129.5527327, 116.1658463, 115.996029, 111.0320682, 117.2335652, 120.4682652, 109.1088673, 107.7761096, 111.0690135, 99.45864766, 86.37912427, 80.34595313, 76.24129301, 77.01393922, 70.44968374, 71.626768, 81.90443504, 84.64622915, 84.91844586, 91.43697545, 94.46776381, 96.44114821, 93.96295405, 95.78616957, 101.4853373, 102.0018236, 104.1759354, 111.9407931, 115.7604746, 112.6270379, 110.851317, 113.4670233, 111.4291011, 114.6964807, 116.8237122, 120.6875845, 126.5422064, 126.661433, 128.8461746, 126.1670585, 125.6852109, 126.3889981, 122.3305554, 120.9335025, 109.3877138, 106.4594286, 112.715253, 114.7706549, 118.3133486, 124.1527777, 130.3894505, 131.0107654, 131.4661316, 127.0902698, 130.2773231, 137.378492, 137.6799472, 139.236907, 137.3172773, 138.8837642, 140.2685509, 144.6701837, 149.4101408, 152.4401016, 153.0213356, 155.0293199, 149.5416732, 154.9070985, 153.7455353);
      data.maxLoss = -41.2;
      data.maxLossPositionMonth = 12;
      data.maxLossPositionYear = 2007;
      data.maxReturn = 56.3;
      data.maxReturnPositionMonth = 3;
      data.maxReturnPositionYear = 2009;
    }

    if (graphType == "fio") {
      data.excelLineArray = new Array(100, 99.6375455, 100.3324212, 100.9833782, 100.9549869, 100.0777924, 100.7749834, 101.389096, 102.2211612, 102.5921938, 102.3289819, 102.289797, 103.3829272, 105.4785889, 106.5906508, 107.0405516, 106.6155701, 107.2681575, 107.6043858, 107.5305359, 109.1746039, 108.7218176, 109.363794, 110.87449, 110.7372284, 111.4338737, 111.6815493, 111.770011, 112.7229596, 113.1128712, 113.0205447, 112.1000371, 113.2595824, 114.5908264, 114.5910112, 116.5514036, 118.6075543, 120.3802874, 121.5519893, 122.6221331, 124.1158841, 126.8555393, 128.8534455, 128.4363622, 127.2972428, 128.8963767, 129.9211174, 130.5136594, 132.0098894, 133.9614366, 134.4222654, 135.7885008, 135.398963, 133.6734074, 134.2075044, 135.9328272, 137.4878125, 138.8300175, 140.0795842, 141.1656232, 142.4778715, 143.0781508, 143.9979685, 143.5717665, 143.7111437, 144.4179802, 146.336211, 146.9209809, 147.3765343, 148.4774743, 147.5789258, 146.8375287, 147.7473016, 148.6571335, 148.7366332, 148.3323702, 147.7660117, 147.930462, 147.7111128, 148.1242457, 149.5313782, 150.6208487, 151.3690104, 152.6860938, 153.3843098, 153.4710316, 154.2790747, 155.0894738, 155.1998045, 155.3347155, 153.899407, 153.5738624, 154.0321456, 155.2388716, 156.6816992, 157.008689, 156.9407965, 157.8553983, 158.4002531, 158.0402473, 158.5999586, 159.2349264, 157.0697508, 156.6173478, 158.6463831, 157.4958883, 147.3885418, 146.6744789, 147.5182117, 153.0090286, 153.2859832, 153.1606086, 157.5870517, 162.65366, 165.0847105, 167.9572798, 171.6181972, 174.162303, 176.8661707, 177.8381305, 179.6022393, 181.8019668, 182.307592, 184.8855543, 186.8498303, 187.4501046, 188.2557312, 189.7129571, 192.7436606, 193.5754018, 195.0173374, 194.5175371, 192.7154073, 193.8381528, 193.3875044, 193.7842164, 194.3298271, 196.6600972, 197.480215, 198.5136064, 199.7787379, 200.1751518, 199.3214794, 201.3855061, 203.1122595, 205.2908131, 207.6253824, 209.350692, 209.9796662, 211.2476732, 211.6563402, 214.4717977, 216.449551, 217.4254699, 218.5897064, 220.099117, 222.1443932, 222.3875506, 221.6471852, 223.2676224, 225.1332216, 226.4722507, 222.1978505, 221.9904842, 221.3356838);
      data.maxLoss = -6.6;
      data.maxLossPositionMonth = 11;
      data.maxLossPositionYear = 2007;
      data.maxReturn = 21.7;
      data.maxReturnPositionMonth = 12;
      data.maxReturnPositionYear = 2008;
    }
    return data;

  }
  */
//}