#pragma once

#include <QtWidgets/QMainWindow>
#include "ui_Glsl_Project.h"
#include"openGL_widget.h"
#include<qpropertyanimation.h>


class Glsl_Project : public QMainWindow
{
	Q_OBJECT

public:
	Glsl_Project(QWidget *parent = Q_NULLPTR);
	~Glsl_Project();
	static Glsl_Project* getInstance();
	void setglWindowNull();
	void Glsl_Project::keyPressEvent(QKeyEvent* e);
	void show();

private:
	Ui::Glsl_ProjectClass ui;
    glWindow* glw;
	static Glsl_Project* instance;
	QPropertyAnimation* animation;

private slots:
	void on_createButton_clicked();

};
