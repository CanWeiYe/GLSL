#version 330
#define pi 3.14159265

uniform int q;
uniform int w;
uniform int l;
uniform int X0;
uniform int Y0;
uniform int color[60];
uniform int style;							// 图案样式
in vec2 st;
out vec4 out_color;
const vec3 colorMap[] = vec3[16](vec3(0,0,0),vec3(0,0,128),vec3(0,128,0),vec3(0,128,128),vec3(128,0,0),vec3(128,0,128),vec3(128,128,0),
vec3(192,192,192),vec3(128,128,128),vec3(0,0,255),vec3(0,255,0),vec3(0,255,255),vec3(255,0,0),vec3(255,0,255),vec3(255,255,0),vec3(255,255,255));
vec3 getColor(int k){						// 获取颜色函数
		return colorMap[k];
}

 float algo( float h, float x, float y,int i){
	if(style == 0)							// 图案1
		return h + cos(x*cos(2*pi*i/q)+y*sin(2*pi*i/q));
	else if(style == 1){
		float t = cos(x*cos(2*pi*i/q)+y*sin(2*pi*i/q));
		return h + t * t;
	}
	else if(style == 2){
		float t = cos(x*cos(2*pi*i/q)-1+y*sin(2*pi*i/q));
		return h + t * t;
	}
	else if(style == 3){
		float t = cos(x*cos(2*pi*i/q)+y*sin(2*pi*i/q));
		return h + t * t + (sin(y)+cos(x))/5;
	}
	else if(style == 4){
		float t = cos(x*cos(2*pi*i/q)+y*sin(2*pi*i/q));
		return h + t * t * t + (sin(y)+cos(x))/15;
	}
	else if(style == 5){
		float t = cos(x*cos(2*pi*i/q)+y*sin(2*pi*i/q));
		return h + t * t * t * t * t+ (sin(y)+cos(x))/10;
	}
	else if(style == 6){
		float t = cos(x*cos(2*pi*i/q)+y*sin(2*pi*i/q));
		return h + t * t * t * t + (sin(y)+cos(x))/2;
	}
	else if(style == 7){
		float t = cos(x*cos(2*pi*i/q)+y*sin(2*pi*i/q));
		return h + t * t * t * t * t * t+ (sin(y)+cos(x));
	}
	else if(style == 8){
		float t = cos(x*cos(2*pi*i/q)+y*sin(2*pi*i/q));
		return h + t * t * t * t * t * t * t+ (sin(y)+cos(x))/2;
	}
	else if(style == 9){
		float t = cos(x*cos(2*pi*i/q)+y*sin(2*pi*i/q));
		return h + t * t * t * t * t * t * t * t * t * t;
	}

}

float checkInterval(float x,float y,float point){
	return ceil(fract(smoothstep(x,y,point)));
}

vec3 drawPoint( float h){
		// ceil(fract(smoothstep(x,y,point))) 1--落在(x,y)范围内 0--范围外
		if(style == 0|| style == 1){					// 图案1-2
//		float interval[20];
//		interval[0] = checkInterval(-9,-5,h);interval[1] = checkInterval(-5,-4,h);interval[2] = checkInterval(-4,-3,h);interval[3] = checkInterval(-3,-2,h);interval[4] = checkInterval(-2,-1,h);interval[5] = checkInterval(-1,-0.5,h);interval[6] = checkInterval(-0.5,-0.2,h);interval[7] = checkInterval(-0.2,-0.1,h);interval[8] = checkInterval(-0.1,0,h);interval[9] = checkInterval(0,0.1,h);interval[10] = checkInterval(0.1,0.2,h);interval[11] = checkInterval(0.2,0.3,h);interval[12] = checkInterval(0.3,0.5,h);interval[13] = checkInterval(0.5,1,h);
//		interval[14] = checkInterval(1,3,h);interval[15] = checkInterval(3,5,h);interval[16] = checkInterval(5,7,h);interval[17] = checkInterval(7,9,h);interval[18] = checkInterval(9,10,h);interval[19] = checkInterval(10,13,h);
//		vec3 final_color = vec3(0,0,0);
//		for(int i =0;i<19;i++){
//			final_color += getColor(color[i])*interval[i];
//		}
//		return final_color;
       return h>-9&&h<=-5? getColor(color[0])
			: h>-5&&h<=-4? getColor(color[1])
			: h>-4&&h<=-3? getColor(color[2])
			: h>-3&&h<=-2? getColor(color[3])
			: h>-2&&h<=-1? getColor(color[4])
			: h>-1&&h<=-0.5? getColor(color[5])
			: h>-0.5&&h<=-0.2? getColor(color[6])
			: h>-0.2&&h<=-0.1? getColor(color[7])
			: h>-0.1&&h<=0? getColor(color[8])
			: h>0&&h<=0.1? getColor(color[9])
			: h>0.1&&h<=0.2? getColor(color[10])
			: h>0.2&&h<=0.3? getColor(color[11])
			: h>0.3&&h<=0.5? getColor(color[12])
			: h>0.5&&h<=1? getColor(color[13])
			: h>1&&h<=3? getColor(color[14])
			: h>3&&h<=5? getColor(color[15])
			: h>5&&h<=7? getColor(color[16])
			: h>7&&h<=9? getColor(color[17])
			: h>9&&h<=10? getColor(color[18])
			: h>9&&h<=13? getColor(color[19]):getColor(color[19]);
	}	
	else if(style == 2){				// 图案3
	   return h>-9&&h<=-5? getColor(color[0])
			: h>-5&&h<=-4? getColor(color[1])
			: h>-4&&h<=-3? getColor(color[2])
			: h>-3&&h<=-2? getColor(color[3])
			: h>-2&&h<=-1.5? getColor(color[4])
			: h>-1.5&&h<=-1? getColor(color[5])
			: h>-1&&h<=-0.5? getColor(color[6])
			: h>-0.5&&h<=-0.2? getColor(color[7])
			: h>-0.2&&h<=-0.1? getColor(color[8])
			: h>-0.1&&h<=0? getColor(color[9])
			: h>0&&h<=0.1? getColor(color[10])
			: h>0.1&&h<=0.2? getColor(color[11])
			: h>0.2&&h<=0.3? getColor(color[12])
			: h>0.3&&h<=0.5? getColor(color[13])
			: h>0.5&&h<=1? getColor(color[14])
			: h>1&&h<=2? getColor(color[15])
			: h>2&&h<=3? getColor(color[16])
			: h>3&&h<=3.75? getColor(color[17])
			: h>3.75&&h<=4.15? getColor(color[18])
			: h>4.15&&h<=5? getColor(color[19])
			: h>5&&h<=6? getColor(color[20])
			: h>6&&h<=7? getColor(color[21])
			: h>7&&h<=9? getColor(color[22])
			: h>9&&h<=10? getColor(color[23])
			: h>9&&h<=13? getColor(color[24]):getColor(color[24]);
	}

	else if(style == 3){
	   return h>-28&&h<=-22? getColor(color[0])
			: h>-22&&h<=-18? getColor(color[1])
			: h>-18&&h<=-15? getColor(color[2])
			: h>-15&&h<=-12? getColor(color[3])
			: h>-12&&h<=-9? getColor(color[4])
			: h>-9&&h<=-5? getColor(color[5])
			: h>-5&&h<=-4? getColor(color[6])
			: h>-4&&h<=-3? getColor(color[7])
			: h>-3&&h<=-2? getColor(color[8])
			: h>-2&&h<=-1? getColor(color[9])
			: h>-1&&h<=-0.5? getColor(color[10])
			: h>-0.5&&h<=-0.2? getColor(color[11])
			: h>-0.2&&h<=-0.1? getColor(color[12])
			: h>-0.1&&h<=0? getColor(color[13])
			: h>0&&h<=0.1? getColor(color[14])
			: h>0.1&&h<=0.2? getColor(color[15])
			: h>0.2&&h<=0.3? getColor(color[16])
			: h>0.3&&h<=0.5? getColor(color[17])
			: h>0.5&&h<=0.8? getColor(color[18])
			: h>0.8&&h<=1.25? getColor(color[19])
			: h>1.25&&h<=1.5? getColor(color[20])
			: h>1.5&&h<=2? getColor(color[21])
			: h>2&&h<=3? getColor(color[22])
			: h>3&&h<=5? getColor(color[23])
			: h>5&&h<=7? getColor(color[24])
			: h>7&&h<=9? getColor(color[25])
			: h>9&&h<=11? getColor(color[26])
			: h>13&&h<=14? getColor(color[27])
			: h>14&&h<=15? getColor(color[28])
			: h>15&&h<=16? getColor(color[29])
			: h>5&&h<=7? getColor(color[30])
			: h>16&&h<=17? getColor(color[31])
			: h>17&&h<=18? getColor(color[32])
			: h>18&&h<=19? getColor(color[33])
			: h>19&&h<=20? getColor(color[34])
			: h>20&&h<=22? getColor(color[35])
			: h>22&&h<=24? getColor(color[36])
			: h>24&&h<=26? getColor(color[37])
			: h>26&&h<=28? getColor(color[38])
			: h>28&&h<=30? getColor(color[39])
			: h>30&&h<=32? getColor(color[40])
			: h>32&&h<=34? getColor(color[41])
			: h>34&&h<=36? getColor(color[42])
			: h>36&&h<=38? getColor(color[43])
			: h>38&&h<=40? getColor(color[44])
			: h>40&&h<=42? getColor(color[45])
			: h>42&&h<=44? getColor(color[46])
			: h>44&&h<=46? getColor(color[47])
			: h>46&&h<=48? getColor(color[48])
			: h>48&&h<=50? getColor(color[49])
			: h>50&&h<=52? getColor(color[50])
			: h>52&&h<=54? getColor(color[51])
			: h>54&&h<=56? getColor(color[52])
			: h>56&&h<=58? getColor(color[53])
			: h>58&&h<=60? getColor(color[54])
			: h>60&&h<=62? getColor(color[55]):getColor(color[55]);
	}

	else if(style == 4){
	   return h>-28&&h<=-22? getColor(color[0])
			: h>-22&&h<=-18? getColor(color[1])
			: h>-18&&h<=-15? getColor(color[2])
			: h>-15&&h<=-12? getColor(color[3])
			: h>-12&&h<=-9? getColor(color[4])
			: h>-9&&h<=-5? getColor(color[5])
			: h>-5&&h<=-4? getColor(color[6])
			: h>-4&&h<=-3? getColor(color[7])
			: h>-3&&h<=-2? getColor(color[8])
			: h>-2&&h<=-1? getColor(color[9])
			: h>-1&&h<=-0.5? getColor(color[10])
			: h>-0.5&&h<=-0.2? getColor(color[11])
			: h>-0.2&&h<=-0.1? getColor(color[12])
			: h>-0.1&&h<=0? getColor(color[13])
			: h>0&&h<=0.1? getColor(color[14])
			: h>0.1&&h<=0.2? getColor(color[15])
			: h>0.2&&h<=0.3? getColor(color[16])
			: h>0.3&&h<=0.5? getColor(color[17])
			: h>0.5&&h<=1? getColor(color[18])
			: h>1&&h<=1.5? getColor(color[19])
			: h>1.5&&h<=3? getColor(color[20])
			: h>3&&h<=5? getColor(color[21])
			: h>5&&h<=6? getColor(color[22])
			: h>6&&h<=7? getColor(color[23])
			: h>7&&h<=9? getColor(color[24])
			: h>9&&h<=11? getColor(color[25])
			: h>13&&h<=14? getColor(color[26])
			: h>14&&h<=15? getColor(color[27])
			: h>15&&h<=16? getColor(color[28])
			: h>5&&h<=7? getColor(color[29])
			: h>16&&h<=17? getColor(color[30])
			: h>17&&h<=18? getColor(color[31])
			: h>18&&h<=19? getColor(color[32])
			: h>19&&h<=20? getColor(color[33])
			: h>20&&h<=22? getColor(color[34])
			: h>22&&h<=24? getColor(color[35])
			: h>24&&h<=26? getColor(color[36])
			: h>26&&h<=28? getColor(color[37])
			: h>28&&h<=30? getColor(color[38])
			: h>30&&h<=32? getColor(color[39])
			: h>32&&h<=34? getColor(color[40])
			: h>34&&h<=36? getColor(color[41])
			: h>36&&h<=38? getColor(color[42])
			: h>38&&h<=40? getColor(color[43])
			: h>40&&h<=42? getColor(color[44])
			: h>42&&h<=44? getColor(color[45])
			: h>44&&h<=46? getColor(color[46])
			: h>46&&h<=48? getColor(color[47])
			: h>48&&h<=50? getColor(color[48])
			: h>50&&h<=52? getColor(color[49])
			: h>52&&h<=54? getColor(color[50])
			: h>54&&h<=56? getColor(color[51])
			: h>56&&h<=58? getColor(color[52])
			: h>58&&h<=60? getColor(color[53])
			: h>60&&h<=62? getColor(color[54]):getColor(color[54]);
	}

	else if(style == 5){
	   return h>-9&&h<=-5? getColor(color[0])
			: h>-5&&h<=-4? getColor(color[1])
			: h>-4&&h<=-3? getColor(color[2])
			: h>-3&&h<=-2? getColor(color[3])
			: h>-2&&h<=-1? getColor(color[4])
			: h>-1&&h<=-0.5? getColor(color[5])
			: h>-0.5&&h<=-0.2? getColor(color[6])
			: h>-0.2&&h<=-0.1? getColor(color[7])
			: h>-0.1&&h<=0? getColor(color[8])
			: h>0&&h<=0.1? getColor(color[9])
			: h>0.1&&h<=0.2? getColor(color[10])
			: h>0.2&&h<=0.3? getColor(color[11])
			: h>0.3&&h<=0.5? getColor(color[12])
			: h>0.5&&h<=1? getColor(color[13])
			: h>1&&h<=3? getColor(color[14])
			: h>3&&h<=5? getColor(color[15])
			: h>5&&h<=7? getColor(color[16])
			: h>7&&h<=9? getColor(color[17])
			: h>9&&h<=11? getColor(color[18]):getColor(color[18]);
	}

	else if(style == 6){
	   return h>-58&&h<=-28? getColor(color[0])
			: h>-28&&h<=-22? getColor(color[1])
			: h>-22&&h<=-18? getColor(color[2])
			: h>-18&&h<=-15? getColor(color[3])
			: h>-15&&h<=-12? getColor(color[4])
			: h>-12&&h<=-9? getColor(color[5])
			: h>-9&&h<=-5? getColor(color[6])
			: h>-5&&h<=-4? getColor(color[7])
			: h>-4&&h<=-3? getColor(color[8])
			: h>-3&&h<=-2.75? getColor(color[9])
			: h>-2.75&&h<=-2.25? getColor(color[10])
			: h>-2.25&&h<=-1.75? getColor(color[11])
			: h>-1.75&&h<=-1? getColor(color[12])
			: h>-1&&h<=-0.5? getColor(color[13])
			: h>-0.5&&h<=-0.2? getColor(color[14])
			: h>-0.2&&h<=-0.1? getColor(color[15])
			: h>-0.1&&h<=0? getColor(color[16])
			: h>0&&h<=0.1? getColor(color[17])
			: h>0.1&&h<=0.2? getColor(color[18])
			: h>0.2&&h<=0.3? getColor(color[19])
			: h>0.3&&h<=0.5? getColor(color[20])
			: h>0.5&&h<=0.75? getColor(color[21])
			: h>0.75&&h<=1? getColor(color[22])
			: h>1&&h<=2? getColor(color[23])
			: h>2&&h<=2.5? getColor(color[24])
			: h>2.5&&h<=3? getColor(color[25])
			: h>3&&h<=4? getColor(color[26])
			: h>4&&h<=5? getColor(color[27])
			: h>5&&h<=7? getColor(color[28])
			: h>7&&h<=9? getColor(color[29])
			: h>9&&h<=11? getColor(color[30])
			: h>13&&h<=14? getColor(color[31])
			: h>14&&h<=15? getColor(color[32])
			: h>15&&h<=16? getColor(color[33])
			: h>5&&h<=7? getColor(color[34])
			: h>16&&h<=17? getColor(color[35])
			: h>17&&h<=18? getColor(color[36])
			: h>18&&h<=19? getColor(color[37])
			: h>19&&h<=20? getColor(color[38])
			: h>20&&h<=22? getColor(color[39])
			: h>22&&h<=24? getColor(color[40])
			: h>24&&h<=26? getColor(color[41])
			: h>26&&h<=28? getColor(color[42])
			: h>28&&h<=30? getColor(color[43])
			: h>30&&h<=32? getColor(color[44])
			: h>32&&h<=34? getColor(color[45])
			: h>34&&h<=36? getColor(color[46])
			: h>36&&h<=38? getColor(color[47])
			: h>38&&h<=40? getColor(color[48])
			: h>40&&h<=42? getColor(color[49])
			: h>42&&h<=44? getColor(color[50])
			: h>44&&h<=46? getColor(color[51])
			: h>46&&h<=48? getColor(color[52])
			: h>48&&h<=50? getColor(color[53])
			: h>50&&h<=52? getColor(color[54])
			: h>52&&h<=54? getColor(color[55])
			: h>54&&h<=56? getColor(color[56])
			: h>56&&h<=58? getColor(color[57])
			: h>58&&h<=60? getColor(color[58])
			: h>60&&h<=62? getColor(color[59]):getColor(color[59]);
	}

	else if(style == 7){
	   return h>-9&&h<=-5? getColor(color[0])
			: h>-5&&h<=-4? getColor(color[1])
			: h>-4&&h<=-3.5? getColor(color[2])
			: h>-3.5&&h<=-3? getColor(color[3])
			: h>-3&&h<=-2? getColor(color[4])
			: h>-2&&h<=-1.5? getColor(color[5])
			: h>-1.5&&h<=-1.1? getColor(color[6])
			: h>-1.1&&h<=-0.95? getColor(color[7])
			: h>-0.95&&h<=-0.25? getColor(color[8])
			: h>-0.25&&h<=-0.5? getColor(color[9])
			: h>-0.5&&h<=-0.2? getColor(color[10])
			: h>-0.2&&h<=-0.1? getColor(color[11])
			: h>-0.1&&h<=0? getColor(color[12])
			: h>0&&h<=0.1? getColor(color[13])
			: h>0.1&&h<=0.2? getColor(color[14])
			: h>0.2&&h<=0.3? getColor(color[15])
			: h>0.3&&h<=0.5? getColor(color[16])
			: h>0.5&&h<=0.85? getColor(color[17])
			: h>0.85&&h<=1.1? getColor(color[18])
			: h>1.1&&h<=1.5? getColor(color[19])
			: h>1.5&&h<=2.5? getColor(color[20])
			: h>2.5&&h<=3.5? getColor(color[21])
			: h>3.5&&h<=5? getColor(color[22])
			: h>5&&h<=5? getColor(color[23])
			: h>7&&h<=9? getColor(color[24])
			: h>9&&h<=11? getColor(color[25]):getColor(color[25]);
	}

	else if(style == 8){
	   return h>-9&&h<=-5? getColor(color[0])
			: h>-5&&h<=-4? getColor(color[1])
			: h>-4&&h<=-3.5? getColor(color[2])
			: h>-3.5&&h<=-3? getColor(color[3])
			: h>-3&&h<=-2? getColor(color[4])
			: h>-2&&h<=-1.5? getColor(color[5])
			: h>-1.5&&h<=-1.1? getColor(color[6])
			: h>-1.1&&h<=-0.95? getColor(color[7])
			: h>-0.95&&h<=-0.25? getColor(color[8])
			: h>-0.25&&h<=-0.5? getColor(color[9])
			: h>-0.5&&h<=-0.2? getColor(color[10])
			: h>-0.2&&h<=-0.1? getColor(color[11])
			: h>-0.1&&h<=0? getColor(color[12])
			: h>0&&h<=0.1? getColor(color[13])
			: h>0.1&&h<=0.2? getColor(color[14])
			: h>0.2&&h<=0.3? getColor(color[15])
			: h>0.3&&h<=0.5? getColor(color[16])
			: h>0.5&&h<=0.85? getColor(color[17])
			: h>0.85&&h<=1.1? getColor(color[18])
			: h>1.1&&h<=1.5? getColor(color[19])
			: h>1.5&&h<=2.5? getColor(color[20])
			: h>2.5&&h<=3.5? getColor(color[21])
			: h>3.5&&h<=5? getColor(color[22])
			: h>5&&h<=5? getColor(color[23])
			: h>7&&h<=9? getColor(color[24])
			: h>9&&h<=11? getColor(color[25]):getColor(color[25]);
	}

	else if(style == 9){
	   return h>-9&&h<=-5? getColor(color[0])
			: h>-5&&h<=-4? getColor(color[1])
			: h>-4&&h<=-3? getColor(color[2])
			: h>-3&&h<=-2? getColor(color[3])
			: h>-2&&h<=-1? getColor(color[4])
			: h>-1&&h<=-0.5? getColor(color[5])
			: h>-0.5&&h<=-0.2? getColor(color[6])
			: h>-0.2&&h<=-0.1? getColor(color[7])
			: h>-0.1&&h<=0? getColor(color[8])
			: h>0&&h<=0.1? getColor(color[9])
			: h>0.1&&h<=0.2? getColor(color[10])
			: h>0.2&&h<=0.3? getColor(color[11])
			: h>0.3&&h<=0.5? getColor(color[12])
			: h>0.5&&h<=1? getColor(color[13])
			: h>1&&h<=3? getColor(color[14])
			: h>3&&h<=5? getColor(color[15])
			: h>5&&h<=7? getColor(color[16])
			: h>7&&h<=9? getColor(color[17])
			: h>9&&h<=10? getColor(color[18])
			: h>9&&h<=13? getColor(color[19]):getColor(color[19]);
	}
	


}

void draw(vec2 point){								// 绘制函数
	point *= l;														// [0,1]->[0,L]
	float s = w;						
	s = step(s,65)*s + step(65,s)*66;				// 	if(s>65)s = 66;
	 float Xmin = 1,Ymin = 1;
	 float Xmax = Xmin + s * pi;   float Ymax = Ymin + s * pi;
	 float deltax = (Xmax-Xmin)/l;  float deltay = (Ymax-Ymin)/l;
	   
	 float x = Xmin + (point.x-X0)*deltax;
	 float y = Ymin + (point.y-Y0)*deltay;
	 float h = 0;

	for(int i = 1;i <= q;i++)
		h = algo(h,x,y,i);	// 迭代算法函数

	out_color = vec4(drawPoint(h),1);
}

void main()
{	
	 vec2 point = vec2(st.x/2+0.5,0.5-st.y/2);		// 转换坐标系(中心转左上)
	 draw(point);
}