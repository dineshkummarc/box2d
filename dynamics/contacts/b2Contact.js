/*
* Copyright (c) 2006-2007 Erin Catto http:
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked, and must not be
* misrepresented the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

goog.provide('box2d.Contact');

goog.require('box2d.ContactNode');
goog.require('box2d.ContactRegister');

/**
 @constructor
 */
box2d.Contact = function(s1, s2) {
  // initialize instance variables for references
  this.m_node1 = new box2d.ContactNode();
  this.m_node2 = new box2d.ContactNode();
  //
  this.m_flags = 0;

  if (!s1 || !s2) {
    this.m_shape1 = null;
    this.m_shape2 = null;
    return;
  }

  this.m_shape1 = s1;
  this.m_shape2 = s2;

  this.m_manifoldCount = 0;

  this.m_friction = Math.sqrt(this.m_shape1.m_friction * this.m_shape2.m_friction);
  this.m_restitution = Math.max(this.m_shape1.m_restitution, this.m_shape2.m_restitution);

  this.m_prev = null;
  this.m_next = null;

  this.m_node1.contact = null;
  this.m_node1.prev = null;
  this.m_node1.next = null;
  this.m_node1.other = null;

  this.m_node2.contact = null;
  this.m_node2.prev = null;
  this.m_node2.next = null;
  this.m_node2.other = null;
};

box2d.Contact.prototype.GetManifolds = function() {
  return null;
};

box2d.Contact.prototype.GetManifoldCount = function() {
  return this.m_manifoldCount;
};

box2d.Contact.prototype.GetNext = function() {
  return this.m_next;
};

box2d.Contact.prototype.GetShape1 = function() {
  return this.m_shape1;
};

box2d.Contact.prototype.GetShape2 = function() {
  return this.m_shape2;
};

box2d.Contact.prototype.Evaluate = function() {};

/*
  @const
  @type {number}
*/
box2d.Contact.e_islandFlag = 0x0001;
/*
  @const
  @type {number}
*/
box2d.Contact.e_destroyFlag = 0x0002;
