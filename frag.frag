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
vec3 getColor(int k){						// 获取颜色函数
		if(k==0)
			return vec3(0,0,0);				// 黑色
		else if(k==1)
			return vec3(0,0,128);			// 蓝色
		else if(k==2)
			return vec3(0,128,0);			// 绿色
		else if(k==3)
			return vec3(0,128,128);			// 青色
		else if(k==4)
			return vec3(128,0,0);			// 红色
		else if(k==5)
			return vec3(128,0,128);			// 洋红
		else if(k==6)
			return vec3(128,128,0);			// 黄色
		else if(k==7)
			return vec3(192,192,192);		// 白色
		else if(k==8)
			return vec3(128,128,128);		// 灰色
		else if(k==9)
			return vec3(0,0,255);		// 亮蓝色
		else if(k==10)
			return vec3(0,255,0);		// 浅绿色
		else if(k==11)
			return vec3(0,255,255);		// 亮青色
		else if(k==12)
			return vec3(255,0,0);			// 亮红色
		else if(k==13)
			return vec3(255,0,255);		// 亮洋红色
		else if(k==14)
			return vec3(255,255,0);		// 亮黄色
		else if(k==15)
			return vec3(255,255,255);		// 亮白色
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
		if(h>-9&&h<=-5)return getColor(color[0]);
		else if(h>-5&&h<=-4)return getColor(color[1]);
		else if(h>-4&&h<=-3)return getColor(color[2]);
		else if(h>-3&&h<=-2)return getColor(color[3]);
		else if(h>-2&&h<=-1)return getColor(color[4]);
		else if(h>-1&&h<=-0.5)return getColor(color[5]);
		else if(h>-0.5&&h<=-0.2)return getColor(color[6]);
		else if(h>-0.2&&h<=-0.1)return getColor(color[7]);
		else if(h>-0.1&&h<=0)return getColor(color[8]);
		else if(h>0&&h<=0.1)return getColor(color[9]);
		else if(h>0.1&&h<=0.2)return getColor(color[10]);
		else if(h>0.2&&h<=0.3)return getColor(color[11]);
		else if(h>0.3&&h<=0.5)return getColor(color[12]);
		else if(h>0.5&&h<=1)return getColor(color[13]);
		else if(h>1&&h<=3)return getColor(color[14]);
		else if(h>3&&h<=5)return getColor(color[15]);
		else if(h>5&&h<=7)return getColor(color[16]);
		else if(h>7&&h<=9)return getColor(color[17]);
		else if(h>9&&h<=10)return getColor(color[18]);
		else if(h>9&&h<=13)return getColor(color[19]);
	}	
	else if(style == 2){				// 图案3
		if(h>-9&&h<=-5)return getColor(color[0]);
		else if(h>-5&&h<=-4)return getColor(color[1]);
		else if(h>-4&&h<=-3)return getColor(color[2]);
		else if(h>-3&&h<=-2)return getColor(color[3]);
		else if(h>-2&&h<=-1.5)return getColor(color[4]);
		else if(h>-1.5&&h<=-1)return getColor(color[5]);
		else if(h>-1&&h<=-0.5)return getColor(color[6]);
		else if(h>-0.5&&h<=-0.2)return getColor(color[7]);
		else if(h>-0.2&&h<=-0.1)return getColor(color[8]);
		else if(h>-0.1&&h<=0)return getColor(color[9]);
		else if(h>0&&h<=0.1)return getColor(color[10]);
		else if(h>0.1&&h<=0.2)return getColor(color[11]);
		else if(h>0.2&&h<=0.3)return getColor(color[12]);
		else if(h>0.3&&h<=0.5)return getColor(color[13]);
		else if(h>0.5&&h<=1)return getColor(color[14]);
		else if(h>1&&h<=2)return getColor(color[15]);
		else if(h>2&&h<=3)return getColor(color[16]);
		else if(h>3&&h<=3.75)return getColor(color[17]);
		else if(h>3.75&&h<=4.15)return getColor(color[18]);
		else if(h>4.15&&h<=5)return getColor(color[19]);
		else if(h>5&&h<=6)return getColor(color[20]);
		else if(h>6&&h<=7)return getColor(color[21]);
		else if(h>7&&h<=9)return getColor(color[22]);
		else if(h>9&&h<=10)return getColor(color[23]);
		else if(h>9&&h<=13)return getColor(color[24]);
	}

	else if(style == 3){
		if(h>-28&&h<=-22)return getColor(color[0]);
		else if(h>-22&&h<=-18)return getColor(color[1]);
		else if(h>-18&&h<=-15)return getColor(color[2]);
		else if(h>-15&&h<=-12)return getColor(color[3]);
		else if(h>-12&&h<=-9)return getColor(color[4]);
		else if(h>-9&&h<=-5)return getColor(color[5]);
		else if(h>-5&&h<=-4)return getColor(color[6]);
		else if(h>-4&&h<=-3)return getColor(color[7]);
		else if(h>-3&&h<=-2)return getColor(color[8]);
		else if(h>-2&&h<=-1)return getColor(color[9]);
		else if(h>-1&&h<=-0.5)return getColor(color[10]);
		else if(h>-0.5&&h<=-0.2)return getColor(color[11]);
		else if(h>-0.2&&h<=-0.1)return getColor(color[12]);
		else if(h>-0.1&&h<=0)return getColor(color[13]);
		else if(h>0&&h<=0.1)return getColor(color[14]);
		else if(h>0.1&&h<=0.2)return getColor(color[15]);
		else if(h>0.2&&h<=0.3)return getColor(color[16]);
		else if(h>0.3&&h<=0.5)return getColor(color[17]);
		else if(h>0.5&&h<=0.8)return getColor(color[18]);
		else if(h>0.8&&h<=1.25)return getColor(color[19]);
		else if(h>1.25&&h<=1.5)return getColor(color[20]);
		else if(h>1.5&&h<=2)return getColor(color[21]);
		else if(h>2&&h<=3)return getColor(color[22]);
		else if(h>3&&h<=5)return getColor(color[23]);
		else if(h>5&&h<=7)return getColor(color[24]);
		else if(h>7&&h<=9)return getColor(color[25]);
		else if(h>9&&h<=11)return getColor(color[26]);
		else if(h>13&&h<=14)return getColor(color[27]);
		else if(h>14&&h<=15)return getColor(color[28]);
		else if(h>15&&h<=16)return getColor(color[29]);
		else if(h>5&&h<=7)return getColor(color[30]);
		else if(h>16&&h<=17)return getColor(color[31]);
		else if(h>17&&h<=18)return getColor(color[32]);
		else if(h>18&&h<=19)return getColor(color[33]);
		else if(h>19&&h<=20)return getColor(color[34]);
		else if(h>20&&h<=22)return getColor(color[35]);
		else if(h>22&&h<=24)return getColor(color[36]);
		else if(h>24&&h<=26)return getColor(color[37]);
		else if(h>26&&h<=28)return getColor(color[38]);
		else if(h>28&&h<=30)return getColor(color[39]);
		else if(h>30&&h<=32)return getColor(color[40]);
		else if(h>32&&h<=34)return getColor(color[41]);
		else if(h>34&&h<=36)return getColor(color[42]);
		else if(h>36&&h<=38)return getColor(color[43]);
		else if(h>38&&h<=40)return getColor(color[44]);
		else if(h>40&&h<=42)return getColor(color[45]);
		else if(h>42&&h<=44)return getColor(color[46]);
		else if(h>44&&h<=46)return getColor(color[47]);
		else if(h>46&&h<=48)return getColor(color[48]);
		else if(h>48&&h<=50)return getColor(color[49]);
		else if(h>50&&h<=52)return getColor(color[50]);
		else if(h>52&&h<=54)return getColor(color[51]);
		else if(h>54&&h<=56)return getColor(color[52]);
		else if(h>56&&h<=58)return getColor(color[53]);
		else if(h>58&&h<=60)return getColor(color[54]);
		else if(h>60&&h<=62)return getColor(color[55]);
	}

	else if(style == 4){
		if(h>-28&&h<=-22)return getColor(color[0]);
		else if(h>-22&&h<=-18)return getColor(color[1]);
		else if(h>-18&&h<=-15)return getColor(color[2]);
		else if(h>-15&&h<=-12)return getColor(color[3]);
		else if(h>-12&&h<=-9)return getColor(color[4]);
		else if(h>-9&&h<=-5)return getColor(color[5]);
		else if(h>-5&&h<=-4)return getColor(color[6]);
		else if(h>-4&&h<=-3)return getColor(color[7]);
		else if(h>-3&&h<=-2)return getColor(color[8]);
		else if(h>-2&&h<=-1)return getColor(color[9]);
		else if(h>-1&&h<=-0.5)return getColor(color[10]);
		else if(h>-0.5&&h<=-0.2)return getColor(color[11]);
		else if(h>-0.2&&h<=-0.1)return getColor(color[12]);
		else if(h>-0.1&&h<=0)return getColor(color[13]);
		else if(h>0&&h<=0.1)return getColor(color[14]);
		else if(h>0.1&&h<=0.2)return getColor(color[15]);
		else if(h>0.2&&h<=0.3)return getColor(color[16]);
		else if(h>0.3&&h<=0.5)return getColor(color[17]);
		else if(h>0.5&&h<=1)return getColor(color[18]);
		else if(h>1&&h<=1.5)return getColor(color[19]);
		else if(h>1.5&&h<=3)return getColor(color[20]);
		else if(h>3&&h<=5)return getColor(color[21]);
		else if(h>5&&h<=6)return getColor(color[22]);
		else if(h>6&&h<=7)return getColor(color[23]);
		else if(h>7&&h<=9)return getColor(color[24]);
		else if(h>9&&h<=11)return getColor(color[25]);
		else if(h>13&&h<=14)return getColor(color[26]);
		else if(h>14&&h<=15)return getColor(color[27]);
		else if(h>15&&h<=16)return getColor(color[28]);
		else if(h>5&&h<=7)return getColor(color[29]);
		else if(h>16&&h<=17)return getColor(color[30]);
		else if(h>17&&h<=18)return getColor(color[31]);
		else if(h>18&&h<=19)return getColor(color[32]);
		else if(h>19&&h<=20)return getColor(color[33]);
		else if(h>20&&h<=22)return getColor(color[34]);
		else if(h>22&&h<=24)return getColor(color[35]);
		else if(h>24&&h<=26)return getColor(color[36]);
		else if(h>26&&h<=28)return getColor(color[37]);
		else if(h>28&&h<=30)return getColor(color[38]);
		else if(h>30&&h<=32)return getColor(color[39]);
		else if(h>32&&h<=34)return getColor(color[40]);
		else if(h>34&&h<=36)return getColor(color[41]);
		else if(h>36&&h<=38)return getColor(color[42]);
		else if(h>38&&h<=40)return getColor(color[43]);
		else if(h>40&&h<=42)return getColor(color[44]);
		else if(h>42&&h<=44)return getColor(color[45]);
		else if(h>44&&h<=46)return getColor(color[46]);
		else if(h>46&&h<=48)return getColor(color[47]);
		else if(h>48&&h<=50)return getColor(color[48]);
		else if(h>50&&h<=52)return getColor(color[49]);
		else if(h>52&&h<=54)return getColor(color[50]);
		else if(h>54&&h<=56)return getColor(color[51]);
		else if(h>56&&h<=58)return getColor(color[52]);
		else if(h>58&&h<=60)return getColor(color[53]);
		else if(h>60&&h<=62)return getColor(color[54]);
	}

	else if(style == 5){
		if(h>-9&&h<=-5)return getColor(color[0]);
		else if(h>-5&&h<=-4)return getColor(color[1]);
		else if(h>-4&&h<=-3)return getColor(color[2]);
		else if(h>-3&&h<=-2)return getColor(color[3]);
		else if(h>-2&&h<=-1)return getColor(color[4]);
		else if(h>-1&&h<=-0.5)return getColor(color[5]);
		else if(h>-0.5&&h<=-0.2)return getColor(color[6]);
		else if(h>-0.2&&h<=-0.1)return getColor(color[7]);
		else if(h>-0.1&&h<=0)return getColor(color[8]);
		else if(h>0&&h<=0.1)return getColor(color[9]);
		else if(h>0.1&&h<=0.2)return getColor(color[10]);
		else if(h>0.2&&h<=0.3)return getColor(color[11]);
		else if(h>0.3&&h<=0.5)return getColor(color[12]);
		else if(h>0.5&&h<=1)return getColor(color[13]);
		else if(h>1&&h<=3)return getColor(color[14]);
		else if(h>3&&h<=5)return getColor(color[15]);
		else if(h>5&&h<=7)return getColor(color[16]);
		else if(h>7&&h<=9)return getColor(color[17]);
		else if(h>9&&h<=11)return getColor(color[18]);
	}

	else if(style == 6){
		if(h>-58&&h<=-28)return getColor(color[0]);
		else if(h>-28&&h<=-22)return getColor(color[1]);
		else if(h>-22&&h<=-18)return getColor(color[2]);
		else if(h>-18&&h<=-15)return getColor(color[3]);
		else if(h>-15&&h<=-12)return getColor(color[4]);
		else if(h>-12&&h<=-9)return getColor(color[5]);
		else if(h>-9&&h<=-5)return getColor(color[6]);
		else if(h>-5&&h<=-4)return getColor(color[7]);
		else if(h>-4&&h<=-3)return getColor(color[8]);
		else if(h>-3&&h<=-2.75)return getColor(color[9]);
		else if(h>-2.75&&h<=-2.25)return getColor(color[10]);
		else if(h>-2.25&&h<=-1.75)return getColor(color[11]);
		else if(h>-1.75&&h<=-1)return getColor(color[12]);
		else if(h>-1&&h<=-0.5)return getColor(color[13]);
		else if(h>-0.5&&h<=-0.2)return getColor(color[14]);
		else if(h>-0.2&&h<=-0.1)return getColor(color[15]);
		else if(h>-0.1&&h<=0)return getColor(color[16]);
		else if(h>0&&h<=0.1)return getColor(color[17]);
		else if(h>0.1&&h<=0.2)return getColor(color[18]);
		else if(h>0.2&&h<=0.3)return getColor(color[19]);
		else if(h>0.3&&h<=0.5)return getColor(color[20]);
		else if(h>0.5&&h<=0.75)return getColor(color[21]);
		else if(h>0.75&&h<=1)return getColor(color[22]);
		else if(h>1&&h<=2)return getColor(color[23]);
		else if(h>2&&h<=2.5)return getColor(color[24]);
		else if(h>2.5&&h<=3)return getColor(color[25]);
		else if(h>3&&h<=4)return getColor(color[26]);
		else if(h>4&&h<=5)return getColor(color[27]);
		else if(h>5&&h<=7)return getColor(color[28]);
		else if(h>7&&h<=9)return getColor(color[29]);
		else if(h>9&&h<=11)return getColor(color[30]);
		else if(h>13&&h<=14)return getColor(color[31]);
		else if(h>14&&h<=15)return getColor(color[32]);
		else if(h>15&&h<=16)return getColor(color[33]);
		else if(h>5&&h<=7)return getColor(color[34]);
		else if(h>16&&h<=17)return getColor(color[35]);
		else if(h>17&&h<=18)return getColor(color[36]);
		else if(h>18&&h<=19)return getColor(color[37]);
		else if(h>19&&h<=20)return getColor(color[38]);
		else if(h>20&&h<=22)return getColor(color[39]);
		else if(h>22&&h<=24)return getColor(color[40]);
		else if(h>24&&h<=26)return getColor(color[41]);
		else if(h>26&&h<=28)return getColor(color[42]);
		else if(h>28&&h<=30)return getColor(color[43]);
		else if(h>30&&h<=32)return getColor(color[44]);
		else if(h>32&&h<=34)return getColor(color[45]);
		else if(h>34&&h<=36)return getColor(color[46]);
		else if(h>36&&h<=38)return getColor(color[47]);
		else if(h>38&&h<=40)return getColor(color[48]);
		else if(h>40&&h<=42)return getColor(color[49]);
		else if(h>42&&h<=44)return getColor(color[50]);
		else if(h>44&&h<=46)return getColor(color[51]);
		else if(h>46&&h<=48)return getColor(color[52]);
		else if(h>48&&h<=50)return getColor(color[53]);
		else if(h>50&&h<=52)return getColor(color[54]);
		else if(h>52&&h<=54)return getColor(color[55]);
		else if(h>54&&h<=56)return getColor(color[56]);
		else if(h>56&&h<=58)return getColor(color[57]);
		else if(h>58&&h<=60)return getColor(color[58]);
		else if(h>60&&h<=62)return getColor(color[59]);
	}

	else if(style == 7){
		if(h>-9&&h<=-5)return getColor(color[0]);
		else if(h>-5&&h<=-4)return getColor(color[1]);
		else if(h>-4&&h<=-3.5)return getColor(color[2]);
		else if(h>-3.5&&h<=-3)return getColor(color[3]);
		else if(h>-3&&h<=-2)return getColor(color[4]);
		else if(h>-2&&h<=-1.5)return getColor(color[5]);
		else if(h>-1.5&&h<=-1.1)return getColor(color[6]);
		else if(h>-1.1&&h<=-0.95)return getColor(color[7]);
		else if(h>-0.95&&h<=-0.25)return getColor(color[8]);
		else if(h>-0.25&&h<=-0.5)return getColor(color[9]);
		else if(h>-0.5&&h<=-0.2)return getColor(color[10]);
		else if(h>-0.2&&h<=-0.1)return getColor(color[11]);
		else if(h>-0.1&&h<=0)return getColor(color[12]);
		else if(h>0&&h<=0.1)return getColor(color[13]);
		else if(h>0.1&&h<=0.2)return getColor(color[14]);
		else if(h>0.2&&h<=0.3)return getColor(color[15]);
		else if(h>0.3&&h<=0.5)return getColor(color[16]);
		else if(h>0.5&&h<=0.85)return getColor(color[17]);
		else if(h>0.85&&h<=1.1)return getColor(color[18]);
		else if(h>1.1&&h<=1.5)return getColor(color[19]);
		else if(h>1.5&&h<=2.5)return getColor(color[20]);
		else if(h>2.5&&h<=3.5)return getColor(color[21]);
		else if(h>3.5&&h<=5)return getColor(color[22]);
		else if(h>5&&h<=5)return getColor(color[23]);
		else if(h>7&&h<=9)return getColor(color[24]);
		else if(h>9&&h<=11)return getColor(color[25]);
	}

	else if(style == 8){
		if(h>-9&&h<=-5)return getColor(color[0]);
		else if(h>-5&&h<=-4)return getColor(color[1]);
		else if(h>-4&&h<=-3.5)return getColor(color[2]);
		else if(h>-3.5&&h<=-3)return getColor(color[3]);
		else if(h>-3&&h<=-2)return getColor(color[4]);
		else if(h>-2&&h<=-1.5)return getColor(color[5]);
		else if(h>-1.5&&h<=-1.1)return getColor(color[6]);
		else if(h>-1.1&&h<=-0.95)return getColor(color[7]);
		else if(h>-0.95&&h<=-0.25)return getColor(color[8]);
		else if(h>-0.25&&h<=-0.5)return getColor(color[9]);
		else if(h>-0.5&&h<=-0.2)return getColor(color[10]);
		else if(h>-0.2&&h<=-0.1)return getColor(color[11]);
		else if(h>-0.1&&h<=0)return getColor(color[12]);
		else if(h>0&&h<=0.1)return getColor(color[13]);
		else if(h>0.1&&h<=0.2)return getColor(color[14]);
		else if(h>0.2&&h<=0.3)return getColor(color[15]);
		else if(h>0.3&&h<=0.5)return getColor(color[16]);
		else if(h>0.5&&h<=0.85)return getColor(color[17]);
		else if(h>0.85&&h<=1.1)return getColor(color[18]);
		else if(h>1.1&&h<=1.5)return getColor(color[19]);
		else if(h>1.5&&h<=2.5)return getColor(color[20]);
		else if(h>2.5&&h<=3.5)return getColor(color[21]);
		else if(h>3.5&&h<=5)return getColor(color[22]);
		else if(h>5&&h<=5)return getColor(color[23]);
		else if(h>7&&h<=9)return getColor(color[24]);
		else if(h>9&&h<=11)return getColor(color[25]);
	}

	else if(style == 9){
		if(h>-9&&h<=-5)return getColor(color[0]);
		else if(h>-5&&h<=-4)return getColor(color[1]);
		else if(h>-4&&h<=-3)return getColor(color[2]);
		else if(h>-3&&h<=-2)return getColor(color[3]);
		else if(h>-2&&h<=-1)return getColor(color[4]);
		else if(h>-1&&h<=-0.5)return getColor(color[5]);
		else if(h>-0.5&&h<=-0.2)return getColor(color[6]);
		else if(h>-0.2&&h<=-0.1)return getColor(color[7]);
		else if(h>-0.1&&h<=0)return getColor(color[8]);
		else if(h>0&&h<=0.1)return getColor(color[9]);
		else if(h>0.1&&h<=0.2)return getColor(color[10]);
		else if(h>0.2&&h<=0.3)return getColor(color[11]);
		else if(h>0.3&&h<=0.5)return getColor(color[12]);
		else if(h>0.5&&h<=1)return getColor(color[13]);
		else if(h>1&&h<=3)return getColor(color[14]);
		else if(h>3&&h<=5)return getColor(color[15]);
		else if(h>5&&h<=7)return getColor(color[16]);
		else if(h>7&&h<=9)return getColor(color[17]);
		else if(h>9&&h<=10)return getColor(color[18]);
		else if(h>9&&h<=13)return getColor(color[19]);
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