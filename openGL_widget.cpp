#include "openGL_widget.h"
#include"Glsl_Project.h"
#include<ctime>
#include<math.h>
#include<Windows.h>
#include<random>
#include<qevent.h>
#include"GL/glut.h"


#define LEFT_BLOCK_WIDTH 231
#define pi 3.14159265
int count;
GLuint VBO, VAO;

struct color
{
public:
	 float r;
	 float g;
	 float b;
	 color(float r,float g,float b):r(r),g(g),b(b){}
};

color getColor(int k) {						// 获取颜色函数
	if (k == 0)
		return color(0, 0, 0);				// 黑色
	else if (k == 1)
		return color(0, 0, 128);			// 蓝色
	else if (k == 2)
		return color(0, 128, 0);			// 绿色
	else if (k == 3)
		return color(0, 128, 128);			// 青色
	else if (k == 4)
		return color(128, 0, 0);			// 红色
	else if (k == 5)
		return color(128, 0, 128);			// 洋红
	else if (k == 6)
		return color(128, 128, 0);			// 黄色
	else if (k == 7)
		return color(192, 192, 192);		// 白色
	else if (k == 8)
		return color(128, 128, 128);		// 灰色
	else if (k == 9)
		return color(0, 0, 255);		// 亮蓝色
	else if (k == 10)
		return color(0, 255, 0);		// 浅绿色
	else if (k == 11)
		return color(0, 255, 255);		// 亮青色
	else if (k == 12)
		return color(255, 0, 0);			// 亮红色
	else if (k == 13)
		return color(255, 0, 255);		// 亮洋红色
	else if (k == 14)
		return color(255, 255, 0);		// 亮黄色
	else if (k == 15)
		return color(255, 255, 255);		// 亮白色
}

color drawPoint(int style,float h,int color[]) {

	if (style == 0 || style == 1) {					// 图案1-2
		if (h > -9 && h <= -5)return getColor(color[0]);
		else if (h > -5 && h <= -4)return getColor(color[1]);
		else if (h > -4 && h <= -3)return getColor(color[2]);
		else if (h > -3 && h <= -2)return getColor(color[3]);
		else if (h > -2 && h <= -1)return getColor(color[4]);
		else if (h > -1 && h <= -0.5)return getColor(color[5]);
		else if (h > -0.5&&h <= -0.2)return getColor(color[6]);
		else if (h > -0.2&&h <= -0.1)return getColor(color[7]);
		else if (h > -0.1&&h <= 0)return getColor(color[8]);
		else if (h > 0 && h <= 0.1)return getColor(color[9]);
		else if (h > 0.1&&h <= 0.2)return getColor(color[10]);
		else if (h > 0.2&&h <= 0.3)return getColor(color[11]);
		else if (h > 0.3&&h <= 0.5)return getColor(color[12]);
		else if (h > 0.5&&h <= 1)return getColor(color[13]);
		else if (h > 1 && h <= 3)return getColor(color[14]);
		else if (h > 3 && h <= 5)return getColor(color[15]);
		else if (h > 5 && h <= 7)return getColor(color[16]);
		else if (h > 7 && h <= 9)return getColor(color[17]);
		else if (h > 9 && h <= 10)return getColor(color[18]);
		else if (h > 9 && h <= 13)return getColor(color[19]);
	}

	else if (style == 2) {				// 图案3
		if (h > -9 && h <= -5)return getColor(color[0]);
		else if (h > -5 && h <= -4)return getColor(color[1]);
		else if (h > -4 && h <= -3)return getColor(color[2]);
		else if (h > -3 && h <= -2)return getColor(color[3]);
		else if (h > -2 && h <= -1.5)return getColor(color[4]);
		else if (h > -1.5&&h <= -1)return getColor(color[5]);
		else if (h > -1 && h <= -0.5)return getColor(color[6]);
		else if (h > -0.5&&h <= -0.2)return getColor(color[7]);
		else if (h > -0.2&&h <= -0.1)return getColor(color[8]);
		else if (h > -0.1&&h <= 0)return getColor(color[9]);
		else if (h > 0 && h <= 0.1)return getColor(color[10]);
		else if (h > 0.1&&h <= 0.2)return getColor(color[11]);
		else if (h > 0.2&&h <= 0.3)return getColor(color[12]);
		else if (h > 0.3&&h <= 0.5)return getColor(color[13]);
		else if (h > 0.5&&h <= 1)return getColor(color[14]);
		else if (h > 1 && h <= 2)return getColor(color[15]);
		else if (h > 2 && h <= 3)return getColor(color[16]);
		else if (h > 3 && h <= 3.75)return getColor(color[17]);
		else if (h > 3.75&&h <= 4.15)return getColor(color[18]);
		else if (h > 4.15&&h <= 5)return getColor(color[19]);
		else if (h > 5 && h <= 6)return getColor(color[20]);
		else if (h > 6 && h <= 7)return getColor(color[21]);
		else if (h > 7 && h <= 9)return getColor(color[22]);
		else if (h > 9 && h <= 10)return getColor(color[23]);
		else if (h > 9 && h <= 13)return getColor(color[24]);
	}

	else if (style == 3) {
		if (h > -28 && h <= -22)return getColor(color[0]);
		else if (h > -22 && h <= -18)return getColor(color[1]);
		else if (h > -18 && h <= -15)return getColor(color[2]);
		else if (h > -15 && h <= -12)return getColor(color[3]);
		else if (h > -12 && h <= -9)return getColor(color[4]);
		else if (h > -9 && h <= -5)return getColor(color[5]);
		else if (h > -5 && h <= -4)return getColor(color[6]);
		else if (h > -4 && h <= -3)return getColor(color[7]);
		else if (h > -3 && h <= -2)return getColor(color[8]);
		else if (h > -2 && h <= -1)return getColor(color[9]);
		else if (h > -1 && h <= -0.5)return getColor(color[10]);
		else if (h > -0.5&&h <= -0.2)return getColor(color[11]);
		else if (h > -0.2&&h <= -0.1)return getColor(color[12]);
		else if (h > -0.1&&h <= 0)return getColor(color[13]);
		else if (h > 0 && h <= 0.1)return getColor(color[14]);
		else if (h > 0.1&&h <= 0.2)return getColor(color[15]);
		else if (h > 0.2&&h <= 0.3)return getColor(color[16]);
		else if (h > 0.3&&h <= 0.5)return getColor(color[17]);
		else if (h > 0.5&&h <= 0.8)return getColor(color[18]);
		else if (h > 0.8&&h <= 1.25)return getColor(color[19]);
		else if (h > 1.25&&h <= 1.5)return getColor(color[20]);
		else if (h > 1.5&&h <= 2)return getColor(color[21]);
		else if (h > 2 && h <= 3)return getColor(color[22]);
		else if (h > 3 && h <= 5)return getColor(color[23]);
		else if (h > 5 && h <= 7)return getColor(color[24]);
		else if (h > 7 && h <= 9)return getColor(color[25]);
		else if (h > 9 && h <= 11)return getColor(color[26]);
		else if (h > 13 && h <= 14)return getColor(color[27]);
		else if (h > 14 && h <= 15)return getColor(color[28]);
		else if (h > 15 && h <= 16)return getColor(color[29]);
		else if (h > 5 && h <= 7)return getColor(color[30]);
		else if (h > 16 && h <= 17)return getColor(color[31]);
		else if (h > 17 && h <= 18)return getColor(color[32]);
		else if (h > 18 && h <= 19)return getColor(color[33]);
		else if (h > 19 && h <= 20)return getColor(color[34]);
		else if (h > 20 && h <= 22)return getColor(color[35]);
		else if (h > 22 && h <= 24)return getColor(color[36]);
		else if (h > 24 && h <= 26)return getColor(color[37]);
		else if (h > 26 && h <= 28)return getColor(color[38]);
		else if (h > 28 && h <= 30)return getColor(color[39]);
		else if (h > 30 && h <= 32)return getColor(color[40]);
		else if (h > 32 && h <= 34)return getColor(color[41]);
		else if (h > 34 && h <= 36)return getColor(color[42]);
		else if (h > 36 && h <= 38)return getColor(color[43]);
		else if (h > 38 && h <= 40)return getColor(color[44]);
		else if (h > 40 && h <= 42)return getColor(color[45]);
		else if (h > 42 && h <= 44)return getColor(color[46]);
		else if (h > 44 && h <= 46)return getColor(color[47]);
		else if (h > 46 && h <= 48)return getColor(color[48]);
		else if (h > 48 && h <= 50)return getColor(color[49]);
		else if (h > 50 && h <= 52)return getColor(color[50]);
		else if (h > 52 && h <= 54)return getColor(color[51]);
		else if (h > 54 && h <= 56)return getColor(color[52]);
		else if (h > 56 && h <= 58)return getColor(color[53]);
		else if (h > 58 && h <= 60)return getColor(color[54]);
		else if (h > 60 && h <= 62)return getColor(color[55]);
	}

	else if (style == 4) {
		if (h > -28 && h <= -22)return getColor(color[0]);
		else if (h > -22 && h <= -18)return getColor(color[1]);
		else if (h > -18 && h <= -15)return getColor(color[2]);
		else if (h > -15 && h <= -12)return getColor(color[3]);
		else if (h > -12 && h <= -9)return getColor(color[4]);
		else if (h > -9 && h <= -5)return getColor(color[5]);
		else if (h > -5 && h <= -4)return getColor(color[6]);
		else if (h > -4 && h <= -3)return getColor(color[7]);
		else if (h > -3 && h <= -2)return getColor(color[8]);
		else if (h > -2 && h <= -1)return getColor(color[9]);
		else if (h > -1 && h <= -0.5)return getColor(color[10]);
		else if (h > -0.5&&h <= -0.2)return getColor(color[11]);
		else if (h > -0.2&&h <= -0.1)return getColor(color[12]);
		else if (h > -0.1&&h <= 0)return getColor(color[13]);
		else if (h > 0 && h <= 0.1)return getColor(color[14]);
		else if (h > 0.1&&h <= 0.2)return getColor(color[15]);
		else if (h > 0.2&&h <= 0.3)return getColor(color[16]);
		else if (h > 0.3&&h <= 0.5)return getColor(color[17]);
		else if (h > 0.5&&h <= 1)return getColor(color[18]);
		else if (h > 1 && h <= 1.5)return getColor(color[19]);
		else if (h > 1.5&&h <= 3)return getColor(color[20]);
		else if (h > 3 && h <= 5)return getColor(color[21]);
		else if (h > 5 && h <= 6)return getColor(color[22]);
		else if (h > 6 && h <= 7)return getColor(color[23]);
		else if (h > 7 && h <= 9)return getColor(color[24]);
		else if (h > 9 && h <= 11)return getColor(color[25]);
		else if (h > 13 && h <= 14)return getColor(color[26]);
		else if (h > 14 && h <= 15)return getColor(color[27]);
		else if (h > 15 && h <= 16)return getColor(color[28]);
		else if (h > 5 && h <= 7)return getColor(color[29]);
		else if (h > 16 && h <= 17)return getColor(color[30]);
		else if (h > 17 && h <= 18)return getColor(color[31]);
		else if (h > 18 && h <= 19)return getColor(color[32]);
		else if (h > 19 && h <= 20)return getColor(color[33]);
		else if (h > 20 && h <= 22)return getColor(color[34]);
		else if (h > 22 && h <= 24)return getColor(color[35]);
		else if (h > 24 && h <= 26)return getColor(color[36]);
		else if (h > 26 && h <= 28)return getColor(color[37]);
		else if (h > 28 && h <= 30)return getColor(color[38]);
		else if (h > 30 && h <= 32)return getColor(color[39]);
		else if (h > 32 && h <= 34)return getColor(color[40]);
		else if (h > 34 && h <= 36)return getColor(color[41]);
		else if (h > 36 && h <= 38)return getColor(color[42]);
		else if (h > 38 && h <= 40)return getColor(color[43]);
		else if (h > 40 && h <= 42)return getColor(color[44]);
		else if (h > 42 && h <= 44)return getColor(color[45]);
		else if (h > 44 && h <= 46)return getColor(color[46]);
		else if (h > 46 && h <= 48)return getColor(color[47]);
		else if (h > 48 && h <= 50)return getColor(color[48]);
		else if (h > 50 && h <= 52)return getColor(color[49]);
		else if (h > 52 && h <= 54)return getColor(color[50]);
		else if (h > 54 && h <= 56)return getColor(color[51]);
		else if (h > 56 && h <= 58)return getColor(color[52]);
		else if (h > 58 && h <= 60)return getColor(color[53]);
		else if (h > 60 && h <= 62)return getColor(color[54]);
	}

	else if (style == 5) {
		if (h > -9 && h <= -5)return getColor(color[0]);
		else if (h > -5 && h <= -4)return getColor(color[1]);
		else if (h > -4 && h <= -3)return getColor(color[2]);
		else if (h > -3 && h <= -2)return getColor(color[3]);
		else if (h > -2 && h <= -1)return getColor(color[4]);
		else if (h > -1 && h <= -0.5)return getColor(color[5]);
		else if (h > -0.5&&h <= -0.2)return getColor(color[6]);
		else if (h > -0.2&&h <= -0.1)return getColor(color[7]);
		else if (h > -0.1&&h <= 0)return getColor(color[8]);
		else if (h > 0 && h <= 0.1)return getColor(color[9]);
		else if (h > 0.1&&h <= 0.2)return getColor(color[10]);
		else if (h > 0.2&&h <= 0.3)return getColor(color[11]);
		else if (h > 0.3&&h <= 0.5)return getColor(color[12]);
		else if (h > 0.5&&h <= 1)return getColor(color[13]);
		else if (h > 1 && h <= 3)return getColor(color[14]);
		else if (h > 3 && h <= 5)return getColor(color[15]);
		else if (h > 5 && h <= 7)return getColor(color[16]);
		else if (h > 7 && h <= 9)return getColor(color[17]);
		else if (h > 9 && h <= 11)return getColor(color[18]);
	}

	else if (style == 6) {
		if (h > -58 && h <= -28)return getColor(color[0]);
		else if (h > -28 && h <= -22)return getColor(color[1]);
		else if (h > -22 && h <= -18)return getColor(color[2]);
		else if (h > -18 && h <= -15)return getColor(color[3]);
		else if (h > -15 && h <= -12)return getColor(color[4]);
		else if (h > -12 && h <= -9)return getColor(color[5]);
		else if (h > -9 && h <= -5)return getColor(color[6]);
		else if (h > -5 && h <= -4)return getColor(color[7]);
		else if (h > -4 && h <= -3)return getColor(color[8]);
		else if (h > -3 && h <= -2.75)return getColor(color[9]);
		else if (h > -2.75&&h <= -2.25)return getColor(color[10]);
		else if (h > -2.25&&h <= -1.75)return getColor(color[11]);
		else if (h > -1.75&&h <= -1)return getColor(color[12]);
		else if (h > -1 && h <= -0.5)return getColor(color[13]);
		else if (h > -0.5&&h <= -0.2)return getColor(color[14]);
		else if (h > -0.2&&h <= -0.1)return getColor(color[15]);
		else if (h > -0.1&&h <= 0)return getColor(color[16]);
		else if (h > 0 && h <= 0.1)return getColor(color[17]);
		else if (h > 0.1&&h <= 0.2)return getColor(color[18]);
		else if (h > 0.2&&h <= 0.3)return getColor(color[19]);
		else if (h > 0.3&&h <= 0.5)return getColor(color[20]);
		else if (h > 0.5&&h <= 0.75)return getColor(color[21]);
		else if (h > 0.75&&h <= 1)return getColor(color[22]);
		else if (h > 1 && h <= 2)return getColor(color[23]);
		else if (h > 2 && h <= 2.5)return getColor(color[24]);
		else if (h > 2.5&&h <= 3)return getColor(color[25]);
		else if (h > 3 && h <= 4)return getColor(color[26]);
		else if (h > 4 && h <= 5)return getColor(color[27]);
		else if (h > 5 && h <= 7)return getColor(color[28]);
		else if (h > 7 && h <= 9)return getColor(color[29]);
		else if (h > 9 && h <= 11)return getColor(color[30]);
		else if (h > 13 && h <= 14)return getColor(color[31]);
		else if (h > 14 && h <= 15)return getColor(color[32]);
		else if (h > 15 && h <= 16)return getColor(color[33]);
		else if (h > 5 && h <= 7)return getColor(color[34]);
		else if (h > 16 && h <= 17)return getColor(color[35]);
		else if (h > 17 && h <= 18)return getColor(color[36]);
		else if (h > 18 && h <= 19)return getColor(color[37]);
		else if (h > 19 && h <= 20)return getColor(color[38]);
		else if (h > 20 && h <= 22)return getColor(color[39]);
		else if (h > 22 && h <= 24)return getColor(color[40]);
		else if (h > 24 && h <= 26)return getColor(color[41]);
		else if (h > 26 && h <= 28)return getColor(color[42]);
		else if (h > 28 && h <= 30)return getColor(color[43]);
		else if (h > 30 && h <= 32)return getColor(color[44]);
		else if (h > 32 && h <= 34)return getColor(color[45]);
		else if (h > 34 && h <= 36)return getColor(color[46]);
		else if (h > 36 && h <= 38)return getColor(color[47]);
		else if (h > 38 && h <= 40)return getColor(color[48]);
		else if (h > 40 && h <= 42)return getColor(color[49]);
		else if (h > 42 && h <= 44)return getColor(color[50]);
		else if (h > 44 && h <= 46)return getColor(color[51]);
		else if (h > 46 && h <= 48)return getColor(color[52]);
		else if (h > 48 && h <= 50)return getColor(color[53]);
		else if (h > 50 && h <= 52)return getColor(color[54]);
		else if (h > 52 && h <= 54)return getColor(color[55]);
		else if (h > 54 && h <= 56)return getColor(color[56]);
		else if (h > 56 && h <= 58)return getColor(color[57]);
		else if (h > 58 && h <= 60)return getColor(color[58]);
		else if (h > 60 && h <= 62)return getColor(color[59]);
	}

	else if (style == 7) {
		if (h > -9 && h <= -5)return getColor(color[0]);
		else if (h > -5 && h <= -4)return getColor(color[1]);
		else if (h > -4 && h <= -3.5)return getColor(color[2]);
		else if (h > -3.5&&h <= -3)return getColor(color[3]);
		else if (h > -3 && h <= -2)return getColor(color[4]);
		else if (h > -2 && h <= -1.5)return getColor(color[5]);
		else if (h > -1.5&&h <= -1.1)return getColor(color[6]);
		else if (h > -1.1&&h <= -0.95)return getColor(color[7]);
		else if (h > -0.95&&h <= -0.25)return getColor(color[8]);
		else if (h > -0.25&&h <= -0.5)return getColor(color[9]);
		else if (h > -0.5&&h <= -0.2)return getColor(color[10]);
		else if (h > -0.2&&h <= -0.1)return getColor(color[11]);
		else if (h > -0.1&&h <= 0)return getColor(color[12]);
		else if (h > 0 && h <= 0.1)return getColor(color[13]);
		else if (h > 0.1&&h <= 0.2)return getColor(color[14]);
		else if (h > 0.2&&h <= 0.3)return getColor(color[15]);
		else if (h > 0.3&&h <= 0.5)return getColor(color[16]);
		else if (h > 0.5&&h <= 0.85)return getColor(color[17]);
		else if (h > 0.85&&h <= 1.1)return getColor(color[18]);
		else if (h > 1.1&&h <= 1.5)return getColor(color[19]);
		else if (h > 1.5&&h <= 2.5)return getColor(color[20]);
		else if (h > 2.5&&h <= 3.5)return getColor(color[21]);
		else if (h > 3.5&&h <= 5)return getColor(color[22]);
		else if (h > 5 && h <= 5)return getColor(color[23]);
		else if (h > 7 && h <= 9)return getColor(color[24]);
		else if (h > 9 && h <= 11)return getColor(color[25]);
	}

	else if (style == 8) {
		if (h > -9 && h <= -5)return getColor(color[0]);
		else if (h > -5 && h <= -4)return getColor(color[1]);
		else if (h > -4 && h <= -3.5)return getColor(color[2]);
		else if (h > -3.5&&h <= -3)return getColor(color[3]);
		else if (h > -3 && h <= -2)return getColor(color[4]);
		else if (h > -2 && h <= -1.5)return getColor(color[5]);
		else if (h > -1.5&&h <= -1.1)return getColor(color[6]);
		else if (h > -1.1&&h <= -0.95)return getColor(color[7]);
		else if (h > -0.95&&h <= -0.25)return getColor(color[8]);
		else if (h > -0.25&&h <= -0.5)return getColor(color[9]);
		else if (h > -0.5&&h <= -0.2)return getColor(color[10]);
		else if (h > -0.2&&h <= -0.1)return getColor(color[11]);
		else if (h > -0.1&&h <= 0)return getColor(color[12]);
		else if (h > 0 && h <= 0.1)return getColor(color[13]);
		else if (h > 0.1&&h <= 0.2)return getColor(color[14]);
		else if (h > 0.2&&h <= 0.3)return getColor(color[15]);
		else if (h > 0.3&&h <= 0.5)return getColor(color[16]);
		else if (h > 0.5&&h <= 0.85)return getColor(color[17]);
		else if (h > 0.85&&h <= 1.1)return getColor(color[18]);
		else if (h > 1.1&&h <= 1.5)return getColor(color[19]);
		else if (h > 1.5&&h <= 2.5)return getColor(color[20]);
		else if (h > 2.5&&h <= 3.5)return getColor(color[21]);
		else if (h > 3.5&&h <= 5)return getColor(color[22]);
		else if (h > 5 && h <= 5)return getColor(color[23]);
		else if (h > 7 && h <= 9)return getColor(color[24]);
		else if (h > 9 && h <= 11)return getColor(color[25]);
	}

	else if (style == 9) {
		if (h > -9 && h <= -5)return getColor(color[0]);
		else if (h > -5 && h <= -4)return getColor(color[1]);
		else if (h > -4 && h <= -3)return getColor(color[2]);
		else if (h > -3 && h <= -2)return getColor(color[3]);
		else if (h > -2 && h <= -1)return getColor(color[4]);
		else if (h > -1 && h <= -0.5)return getColor(color[5]);
		else if (h > -0.5&&h <= -0.2)return getColor(color[6]);
		else if (h > -0.2&&h <= -0.1)return getColor(color[7]);
		else if (h > -0.1&&h <= 0)return getColor(color[8]);
		else if (h > 0 && h <= 0.1)return getColor(color[9]);
		else if (h > 0.1&&h <= 0.2)return getColor(color[10]);
		else if (h > 0.2&&h <= 0.3)return getColor(color[11]);
		else if (h > 0.3&&h <= 0.5)return getColor(color[12]);
		else if (h > 0.5&&h <= 1)return getColor(color[13]);
		else if (h > 1 && h <= 3)return getColor(color[14]);
		else if (h > 3 && h <= 5)return getColor(color[15]);
		else if (h > 5 && h <= 7)return getColor(color[16]);
		else if (h > 7 && h <= 9)return getColor(color[17]);
		else if (h > 9 && h <= 10)return getColor(color[18]);
		else if (h > 9 && h <= 13)return getColor(color[19]);
	}



}

float algo(float h,int q, float x, float y, int i,int style) {
	if (style == 0)							// 图案1
		return h + cos(x*cos(2 * pi*i / q) + y * sin(2 * pi*i / q));
	else if (style == 1) {
		float t = cos(x*cos(2 * pi*i / q) + y * sin(2 * pi*i / q));
		return h + t * t;
	}
	else if (style == 2) {
		float t = cos(x*cos(2 * pi*i / q) - 1 + y * sin(2 * pi*i / q));
		return h + t * t;
	}
	else if (style == 3) {
		float t = cos(x*cos(2 * pi*i / q) + y * sin(2 * pi*i / q));
		return h + t * t + (sin(y) + cos(x)) / 5;
	}
	else if (style == 4) {
		float t = cos(x*cos(2 * pi*i / q) + y * sin(2 * pi*i / q));
		return h + t * t * t + (sin(y) + cos(x)) / 15;
	}
	else if (style == 5) {
		float t = cos(x*cos(2 * pi*i / q) + y * sin(2 * pi*i / q));
		return h + t * t * t * t * t + (sin(y) + cos(x)) / 10;
	}
	else if (style == 6) {
		float t = cos(x*cos(2 * pi*i / q) + y * sin(2 * pi*i / q));
		return h + t * t * t * t + (sin(y) + cos(x)) / 2;
	}
	else if (style == 7) {
		float t = cos(x*cos(2 * pi*i / q) + y * sin(2 * pi*i / q));
		return h + t * t * t * t * t * t + (sin(y) + cos(x));
	}
	else if (style == 8) {
		float t = cos(x*cos(2 * pi*i / q) + y * sin(2 * pi*i / q));
		return h + t * t * t * t * t * t * t + (sin(y) + cos(x)) / 2;
	}
	else if (style == 9) {
		float t = cos(x*cos(2 * pi*i / q) + y * sin(2 * pi*i / q));
		return h + t * t * t * t * t * t * t * t * t * t;
	}
}

void CPUdraw(int q,int w,int l,int X0,int Y0,int style,int color[]) {
	for (GLint x = -300; x <= 300; x++) {
		for (GLint y = -300; y <= 300; y++) {
			float x_origin = (float)x / 300;											// [-1,1]
			float y_origin = (float)y / 300;											// [-1,1]
			float x0 = x_origin, y0 = y_origin;
			x0 = x0 / 2 + 0.5; y0 = 0.5 - y0 / 2;								// 转换坐标系
			x0 *= l; y0 *= l;													// [0,1]->[0,L]
			float s = w;
			if (s > 65)s = 66;
			float Xmin = 1, Ymin = 1;
			float Xmax = Xmin + s * pi;  float Ymax = Ymin + s * pi;
			float deltax = (Xmax - Xmin) / l; float deltay = (Ymax - Ymin) / l;

			float x_current = Xmin + (x0 - X0)*deltax;
			float y_current = Ymin + (y0 - Y0)*deltay;
			float h = 0;

			for (int i = 1; i <= q; i++)
				h = algo(h,q, x_current, y_current, i,style);	// 迭代算法函数

			struct color outColor = drawPoint(style,h,color);
			glColor3f(outColor.r, outColor.g, outColor.b);
			glVertex2f(x_origin, y_origin);
		}
	}
}

int glWindow::getColorCount(int style) {
	switch (style) {
		case 0:
			return 20;
		case 1:
			return 20;
		case 2:
			return 25;
		case 3:
			return 55;
		case 4:
			return 54;
		case 5:
			return 19;
		case 6:
			return 59;
		case 7:
			return 26;
		case 8:
			return 25;
		case 9:
			return 19;
		default:
			return 60;
	}
}

void glWindow::initColor() {				// 初始化数组
	if (style == 0) {
		int t[20] = { 10,2,7,4,3,9,12,13,8,10,13,5,12,1,11,15,8,14,9,15 };
		for (int i = 0; i < 20; i++)
			color[i] = t[i];
		return;
	}
	else if (style == 1) {
		int t[20] = { 10,2,7,4,3,9,12,13,8,10,13,5,12,1,11,15,8,14,9,15 };
		for (int i = 0; i < 20; i++)
			color[i] = t[i];
		return;
	}
	else if (style == 2) {
		int t[25] = { 14,1,7,4,3,14,9,12,13,8,14,13,5,12,1,12,3,15,1,14,8,5,14,9,15 };
		for (int i = 0; i < 25; i++)
			color[i] = t[i];
		return;
	}
	else if (style == 3) {
		int t[55] = { 2,1,9,13,4,9,11,15,4,3,12,15,9,1,0,2,9,15,14,3,5,0,12,1,0,9,2,3,13,9,4,14,0,2,1,9,0,12,14,9,13,1,0,3,15,11,8,12,14,13,1,10,3,12,9 };
		for (int i = 0; i < 55; i++)
			color[i] = t[i];
		return;
	}
	else if (style == 4) {
		int t[54] = { 2,1,9,13,4,9,11,15,4,3,12,15,9,1,0,2,9,15,14,0,12,1,0,3,9,2,3,13,9,4,14,0,2,1,9,0,12,14,9,13,1,0,3,15,11,8,12,14,13,1,10,3,12,9 };
		for (int i = 0; i < 54; i++)
			color[i] = t[i];
		return;
	}
	else if (style == 5) {
		int t[19] = { 2,10,8,5,6,14,15,2,6,10,11,6,12,6,12,14,6,10,9 };
		for (int i = 0; i < 19; i++)
			color[i] = t[i];
		return;
	}
	else if (style == 6) {
		int t[59] = { 12,0,0,9,1,3,2,10,15,14,8,12,3,14,15,2,15,10,11,9,13,1,5,0,12,9,15,14,15,10,9,11,15,13,2,10,14,11,6,13,14,7,2,11,5,12,3,14,4,10,9,11,8,5,2,10,3,12,5 };
		for (int i = 0; i < 59; i++)
			color[i] = t[i];
		return;
	}
	else if (style == 7) {
		int t[26] = { 2,7,9,2,15,4,3,1,2,9,11,6,8,1,12,3,14,4,1,9,2,4,12,1,0,1 };
		for (int i = 0; i < 26; i++)
			color[i] = t[i];
		return;
	}
	else if (style == 8) {
		int t[25] = { 2,14,9,15,4,3,1,2,15,11,6,8,1,12,3,14,4,1,9,2,4,12,1,0,1 };
		for (int i = 0; i < 25; i++)
			color[i] = t[i];
		return;
	}
	else if (style == 9) {
		int t[19] = { 2,10,8,5,6,14,15,2,6,10,11,6,12,6,12,14,6,10,9 };
		for (int i = 0; i < 19; i++)
			color[i] = t[i];
		return;
	}
}

glWindow::glWindow(int q, int w, int l, int X0, int Y0,bool isColorRandom,int style):q(q),w(w),l(l),X0(X0),Y0(Y0),isColorRandom(isColorRandom),style(style){
	this->setWindowTitle("Fractal");
	count = getColorCount(style);
	initColor();
	if (isColorRandom)
		upsetColor();								// 打乱数组
	this->setParent(Glsl_Project::getInstance());
	this->setGeometry(LEFT_BLOCK_WIDTH,0,l,l);
}
void glWindow::upsetColor() {
	std::default_random_engine e(time(0));
	std::uniform_real_distribution<double> u(0, 1);
	for (int i = 0; i < count; i++) {
		int j = floor((count - 1) * u(e));
		int t = color[j];
		color[j] = color[i];
		color[i] = t;
	}
}
LARGE_INTEGER qpc1;
LARGE_INTEGER qpf;
LARGE_INTEGER qpc2;
void glWindow::initializeGL() {


	QueryPerformanceCounter(&qpc1);//是返回定时器当前计数值。

	QueryPerformanceFrequency(&qpf);//是返回定时器的频率。

	//着色器部分
	core = QOpenGLContext::currentContext()->versionFunctions<QOpenGLFunctions_3_3_Core>();
	ourShader = new Shader("vert.vert", "frag.frag");

	ID = ourShader->shaderProgram.programId();

	//VAO，VBO数据部分
	GLfloat vertices[] = {
		1.0f, 1.0f, 0.0f  ,  -1.0f, 1.0f, 0.0f,  
	   -1.0f, -1.0f, 0.0f ,  -1.0f, -1.0f, 0.0f,  
		1.0f,  1.0f, 0.0f ,   1.0f, -1.0f, 1.0f   
	};


	core->glGenVertexArrays(1, &VAO);//两个参数，第一个为需要创建的缓存数量。第二个为用于存储单一ID或多个ID的GLuint变量或数组的地址
	core->glGenBuffers(1, &VBO);
	core->glBindVertexArray(VAO);
	core->glBindBuffer(GL_ARRAY_BUFFER, VBO);

	core->glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
	core->glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(GLfloat), (void*)0);
	core->glEnableVertexAttribArray(0);

	core->glBindBuffer(GL_ARRAY_BUFFER, 0);
	core->glBindVertexArray(0);
}

void glWindow::resizeGL(int w, int h) {
	core->glViewport(0, 0, w, h);
}
void glWindow::paintGL() {

	/*ourShader->use();
	core->glUniform1i(core->glGetUniformLocation(ID,"q"),this->q);			//	向GPU传参
	core->glUniform1i(core->glGetUniformLocation(ID, "w"), this->w);
	core->glUniform1i(core->glGetUniformLocation(ID, "l"), this->l);
	core->glUniform1i(core->glGetUniformLocation(ID, "X0"), this->X0);
	core->glUniform1i(core->glGetUniformLocation(ID, "Y0"), this->Y0);
	core->glUniform1iv(core->glGetUniformLocation(ID, "color"),count, this->color);
	core->glUniform1i(core->glGetUniformLocation(ID, "style"), this->style);
	core->glBindVertexArray(VAO);
	core->glDrawArrays(GL_TRIANGLES, 0, 6);*/
	glBegin(GL_POINTS);
	CPUdraw(q,w,l,X0,Y0,style,color);
	glEnd();
	QueryPerformanceCounter(&qpc2);

	LONGLONG ll = qpc2.QuadPart - qpc1.QuadPart;

	double d = ll / (double)(qpf.QuadPart);
	qDebug() << d << endl;
}

glWindow::~glWindow() {
	Glsl_Project* w = Glsl_Project::getInstance();
	w->setglWindowNull();
}

void glWindow::keyPressEvent(QKeyEvent *e) {
	
	if (e->key() == Qt::Key_Escape)
		this->close();
}

