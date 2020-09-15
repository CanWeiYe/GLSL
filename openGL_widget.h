#pragma once

#include <QOpenGLWidget>
#include <qDebug>
#include <QOpenGLFunctions_3_3_Core>
#include "shader.h"

class glWindow : public QOpenGLWidget
{
public:
	friend class Glsl_Project;
	glWindow(int q,int w, int l,int X0,int Y0,bool isColorRandom,int style);
	static int getColorCount(int style);
    void initColor();
	void upsetColor();
	GLuint a;
	~glWindow();
protected:
	virtual void initializeGL();
	virtual void resizeGL(int w, int h);
	virtual void paintGL();
	void keyPressEvent(QKeyEvent *e);
private:
	Shader *ourShader;
	QOpenGLFunctions_3_3_Core *core;
	GLuint ID;
	int q;	// 迭代次数
	int w;	// 图像密度
	int l;	// 图像大小
	int X0;	// 中心X坐标
	int Y0;	// 中心Y坐标
	bool isColorRandom;	// 颜色是否随机
	int style;	// 图像样式
	int color[60];	// 颜色数组
};
