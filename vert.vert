#version 330
layout (location = 0) in vec3 aPos;   // λ�ñ���������λ��ֵΪ 0 
out vec2 st;

void main()
{
		 gl_Position = vec4(aPos,1);
		 st = vec2(aPos.xy);
}