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
	int q;	// ��������
	int w;	// ͼ���ܶ�
	int l;	// ͼ���С
	int X0;	// ����X����
	int Y0;	// ����Y����
	bool isColorRandom;	// ��ɫ�Ƿ����
	int style;	// ͼ����ʽ
	int color[60];	// ��ɫ����
};
